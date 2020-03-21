import React from "react";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import {AsyncStorage, Text, ScrollView} from "react-native";
import Api from "./utils/api";
import * as BackgroundFetch from "expo-background-fetch";
import TrackHome from "./utils/TrackHome";
import * as TaskManager from "expo-task-manager";

const trackHome = new TrackHome();

console.log(trackHome.taskName);
TaskManager.defineTask(trackHome.taskName, trackHome.checkForHomeSSID);

export default class App extends React.Component {
    state = {
        user: null,
        error: null
    };

    async componentDidMount() {
        // clear local data on app start
        await AsyncStorage.clear();

        const userName = await AsyncStorage.getItem("username");

        if (userName !== null) {
            try {
                const user = await Api.getUser(userName);
                this.setState({user});
            } catch (e) {
                this.setState({error: e.message});
            }
        }

        this.registerTaskAsync();
    }

    registerTaskAsync = async () => {
      console.log(trackHome.taskName);
        await BackgroundFetch.registerTaskAsync(trackHome.taskName, {
          minimumInterval: 1,
          startOnBoot: true
        });
        alert('task registered');
    };

    generateUserId = async displayName => {
        return "user_" + displayName.split(" ").join("-") + "_" + Math.random().toString(36).replace("0.", "");
    };

    handleLogin = async displayName => {
        //generate a random username
        const userName = this.generateUserId(displayName);
        try {
            const user = await Api.createUser(userName, displayName);
            await AsyncStorage.setItem("username", userName, () => {
            });
            this.setState({user});
        } catch (e) {
            this.setState({error: e.message});
        }
    };

    render() {
        const {error, user} = this.state;

        if (error)
            return (
                <ScrollView>
                    <Text style={{color: "red", margin: 20}}>
                        Error: {error}
                    </Text>
                </ScrollView>
            );

        if (user === null)
            return <LoginScreen onLogin={this.handleLogin}/>;

        return <HomeScreen user={user}/>;
    }
}
