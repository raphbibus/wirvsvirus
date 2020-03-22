/**
 * Base url to the api endpoint.
 *
 * Documentation is found at {@link https://github.com/raphbibus/wirvsvirus_backend}.
 *
 * @type {string}
 * @since 1.0.0
 * @version 1.0.0
 * @author Raphael Hahn
 */
const BASE_URL = "https://wirvsvirus.agile-punks.com/";

/**
 * The headers to append on every backend request.
 *
 * @type {{Accept: string, "Access-Control-Allow-Origin": string, "Content-Type": string}}
 * @since 1.0.0
 * @version 1.0.0
 * @author Raphael Hahn
 */
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

/**
 * @class Api
 *
 * The class {@link Api} provides functions for accessing the api endpoint hosted at {@link BASE_URL}.
 *
 * @exports Api
 * @since 1.0.0
 * @version 1.0.0
 * @author Raphael Hahn
 */
export default class Api {
  /**
   * Function to get the statistics of a user.
   *
   * Calls :
   * @example
   * GET users/<username>/stats | 200 OK | 404 on not found
   *
   *
   * //response
   *  {
   *    "seconds": 124513235,
   *    "points": 1341
   *  }
   *
   * @param userName The user name
   * @returns {Promise<any>} A stats object
   * @throws Error when username is null or empty
   * @throws Error when the user does not exists
   * @throws Error when the backend is not available
   *
   * @since 1.0.0
   * @version 1.0.0
   * @author Raphael Hahn
   */
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
    if (!Number.isInteger(page)) throw new Error("Page should be an integer!");

    const response = await fetch(BASE_URL + "leaderboard?page=" + page, {
      headers: HEADERS
    });

    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async getLeaderboardByNation(nationCode) {
    if (nationCode == null) throw new Error("NationCode should not be null!");
    if (nationCode === "") throw new Error("NationCode should not be empty!");

    const response = await fetch(BASE_URL + "leaderboard/nation/" + nationCode, {
      headers: HEADERS
    });

    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }

  static async getLeaderboardPageByNation(page, nationCode) {
    if (!Number.isInteger(page)) throw new Error("Page should be an integer!");
    if (nationCode == null) throw new Error("NationCode should not be null!");
    if (nationCode === "") throw new Error("NationCode should not be empty!");

    const response = await fetch(BASE_URL + "leaderboard/nation/" + nationCode + "?page=" + page, {
      headers: HEADERS
    });

    if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

    return await response.json();
  }
}
