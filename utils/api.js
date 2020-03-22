const BASE_URL = "https://wirvsvirus.agile-punks.com/";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export default class Api {
  static async getUserStats(userName) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");

    const response = await fetch(BASE_URL + "users/" + userName + "/stats", {
      headers: HEADERS
    });

    if (response.status == 404) throw new Error("User not found!");
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createEnteredHomeEvent(userName, timestamp) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (timestamp == null) throw new Error("Timestamp should not be null!");
    if (timestamp === "") throw new Error("Timestamp should not be empty!");

    const response = await fetch(BASE_URL + "users/" + userName + "/home-enter", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        timestamp: timestamp
      })
    });

    if (response.status == 404) throw new Error("User not found!");
    if (response.status == 422) throw new Error("Invalid timestamp!");
    if (response.status != 201) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createLeftHomeEvent(userName, timestamp, token) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (timestamp == null) throw new Error("Timestamp should not be null!");
    if (timestamp === "") throw new Error("Timestamp should not be empty!");
    if (token == null) throw new Error("Token should not be null!");
    if (token === "") throw new Error("Token should not be empty");

    const response = await fetch(BASE_URL + "users/" + userName + "/home-leave", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        timestamp: timestamp,
        token: token
      })
    });

    if (response.status == 404) throw new Error("User not found!");
    if (response.status == 422) throw new Error("Invalid timestamp or token!");
    if (response.status != 201) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async getUser(userName) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");

    const response = await fetch(BASE_URL + "users/" + userName, {
      headers: HEADERS
    });

    if (response.status == 404) throw new Error("User not found!");
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createUser(userName, displayName) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (displayName == null) throw new Error("Displayname should not be null!");
    if (displayName === "") throw new Error("Displayname should not be empty!");

    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName
      })
    });

    if (response.status == 422) throw new Error("User could not be created: " + await response.text());
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createUserWithNation(userName, displayName, nation) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (displayName == null) throw new Error("Displayname should not be null!");
    if (displayName === "") throw new Error("Displayname should not be empty!");
    if (nation == null) throw new Error("Nation should not be null!");
    if (nation === "") throw new Error("Nation should not be empty!");

    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName,
        nation: nation
      })
    });

    if (response.status == 422) throw new Error("User could not be created: " + await response.text());
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createUserWithCity(userName, displayName, city) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (displayName == null) throw new Error("Displayname should not be null!");
    if (displayName === "") throw new Error("Displayname should not be empty!");
    if (city == null) throw new Error("City should not be null!");
    if (city === "") throw new Error("City should not be empty!");

    const response = await fetch(BASE_URL + "users", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: userName,
        display_name: displayName,
        city: city
      })
    });

    if (response.status == 422) throw new Error("User could not be created: " + await response.text());
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async createUserComplete(userName, displayName, nation, city) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (displayName == null) throw new Error("Displayname should not be null!");
    if (displayName === "") throw new Error("Displayname should not be empty!");
    if (nation == null) throw new Error("Nation should not be null!")
    if (nation === "") throw new Error("Nation should not be empty!");
    if (city == null) throw new Error("City should not be null!");
    if (city === "") throw new Error("City should not be empty!");

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

    if (response.status == 422) throw new Error("User could not be created: " + await response.text());
    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async addPoints(userName, points) {
    if (userName == null) throw new Error("Username should not be null!");
    if (username === "") throw new Error("Username should not be empty!");
    if (!Number.isInteger(points)) throw new Error("Points should be an integer!");

    const response = await fetch(BASE_URL + "users/" + userName + "/points-add", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        points: points
      })
    });

    if (response.status == 404) throw new Error("User not found!");
    if (response.status == 422) throw new Error("Points could not be added: " + await response.text());
    if (response.status != 201) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async getLeaderboard() {
    const response = await fetch(BASE_URL + "leaderboard", {
      headers: HEADERS
    });

    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async getLeaderboardPage(page) {
    if (!Number.isInteger(points)) throw new Error("Page should be an integer!");

    const response = await fetch(BASE_URL + "leaderboard?page=" + page, {
      headers: HEADERS
    });

    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }
}
