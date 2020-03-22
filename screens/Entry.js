import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from "react-native";
import Drawer from "react-native-raw-bottom-sheet";
import Button from "../components/GreenButton";

// only one at the moment, need to require all!
const plant1Stage8 = require("../assets/plants/pflanze1.stage8.png");

function Time(props) {
  return (
    <View
      style={{
        alignItems: "center",
        margin: 16,
        marginTop: 6,
        width: 60
      }}
    >
      <Text style={{ fontSize: 24, fontFamily: "nunito-black" }}>
        {props.value}
      </Text>
      <Text>{props.title}</Text>
    </View>
  );
}

function Card(props) {
  return (
    <View
      style={{
        height: 100,
        width: 250,
        backgroundColor: "#F2F2F2",
        borderRadius: 15,
        margin: 12,
        marginLeft: props.first ? 47 : 12
      }}
    >
      <Text
        style={{
          fontFamily: "nunito",
          marginTop: 18,
          marginLeft: 22,
          color: "#2E2E2E",
          opacity: 0.5
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontFamily: "nunito-bold",
          marginTop: 18,
          marginLeft: 22
        }}
      >
        +{props.credits}
        <Text
          style={{
            fontSize: 12,
            fontFamily: "nunito",
            color: "#2e2e2e"
          }}
        >
          {" "}
          credits
        </Text>
      </Text>
    </View>
  );
}

export default class EntryScreen extends React.Component {
  drawer = null;

  componentDidMount() {
    this.drawer.open();
  }

  handleDrawerClose = () => this.drawer.close();

  handleAllActivities = () => Alert.alert("", "All Activities");

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            marginTop: 64,
            marginLeft: 47,
            marginBottom: 22
          }}
        >
          <Text style={{ fontFamily: "nunito-bold", fontSize: 20 }}>
            Congrats Violetta,
          </Text>
          <Text style={{ fontFamily: "nunito-bold", fontSize: 20 }}>
            Your plant is growing!
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end" }}
          >
            <Image
              source={plant1Stage8}
              resizeMode="contain"
              style={{ width: 200, height: 275 }}
            />
            <View
              style={{
                width: 100,
                height: 80,
                borderRadius: 15,
                backgroundColor: "#526684",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: 24,
                  color: "white"
                }}
              >
                4602
              </Text>
              <Text style={{ fontFamily: "nunito", color: "white" }}>
                Total Score
              </Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text>Today's time you spend at home:</Text>
          <View style={{ flexDirection: "row" }}>
            <Time value="03" title="Hours" />
            <Time value="12" title="Minutes" />
            <Time value="28" title="Seconds" />
          </View>
        </View>

        <Drawer
          ref={r => (this.drawer = r)}
          height={270}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            container: {
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderColor: "#ddd",
              borderWidth: 1
            }
          }}
        >
          <TouchableOpacity
            onPress={this.handleDrawerClose}
            style={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              height: 46,
              width: "100%",
              alignItems: "center"
            }}
          >
            <View
              style={{
                width: 60,
                height: 3,
                backgroundColor: "lightgrey",
                marginTop: 20,
                borderRadius: 2
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "nunito-bold",
              fontSize: 18,
              marginLeft: 47,
              marginBottom: 10
            }}
          >
            Today's Top Picks
          </Text>
          <ScrollView horizontal={true}>
            <Card first title="Clean your room" credits={100} />
            <Card title="Finish your painting" credits={80} />
            <Card title="Do 30 minutes cardio" credits={300} />
          </ScrollView>
          <Button
            style={{ alignSelf: "center", width: 160 }}
            onPress={this.handleAllActivities}
          >
            All Activities
          </Button>
        </Drawer>
      </View>
    );
  }
}
