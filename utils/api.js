const BASE_URL = "https://wirvsvirus.agile-punks.com/";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export default class Api {
  static async getUserStats(userName) {
    if (userName === null) throw new Error("Username should not be null!");
    if (username == "") throw new Error("Username should not be empty!")

    const response = await fetch(BASE_URL + "users/" + userName + "/stats", {
      headers: HEADERS
    });

    if (response.status == 404) throw new Error("User not found!");
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createEnteredHomeEvent(userName, timestamp) {
    const response = await fetch(BASE_URL + "users/" + userName + "/home-enter", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        timestamp: timestamp
      })
    });
    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async createLeftHomeEvent(userName, timestamp, token) {
    const response = await fetch(BASE_URL + "users/" + userName + "/home-leave", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        timestamp: timestamp,
        token: token
      })
    });
    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async getUser(userName) {
    const response = await fetch(BASE_URL + "users/" + userName, {
      headers: HEADERS
    });

    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async createUser(userName, displayName) {
    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName
      })
    });

    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async createUserWithNation(userName, displayName, nation) {
    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName,
        nation: nation
      })
    });

    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async createUserWithCity(userName, displayName, city) {
    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName,
        city: city
      })
    });

    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async createUserComplete(userName, displayName, nation, city) {
    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName,
        nation: nation,
        city: city
      })
    });

    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async addPoints(userName, points) {
    const response = await fetch(BASE_URL + "users/" + userName + "/points-add", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        points: points
      })
    });
    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }

  static async getLeaderboard() {
    const response = await fetch(BASE_URL + "leaderboard", {
      headers: HEADERS
    });

    if (response.status > 299) throw new Error(await response.text());

    return await response.json();
  }
}
