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
     * {@link https://github.com/raphbibus/wirvsvirus_backend#get-user-stats}
     * @example
     * GET users/<username>/stats | 200 OK | 404 on not found
     *
     *
     *  //response
     *  {
     *    "seconds": 124513235,
     *    "points": 1341
     *  }
     *
     * @param userName The user name
     *
     * @returns {Promise<any>} A stats object
     *
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

    /**
     * Function to save when the user enteres the home wifi.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#create-entered-home-event}
     * @example
     * POST users/<username>/home-enter | 201 Created | 422 on validation error | 404 on not found
     *
     *
     *  // payload
     *  {
     *    "timestamp": "2020-03-21T10:50:22.000000Z"
     *  }
     *
     *  //response
     *  {
     *    "entered": "2020-03-21 10:50:22",
     *    "token": "9ce46249294e220f06434d57911a7c4a", //used for home-leave reference
     *    "updated_at": "2020-03-21T11:33:36.000000Z",
     *    "created_at": "2020-03-21T11:33:36.000000Z"
     *  }
     *
     * @param userName The user name
     * @param timestamp The time when the user has entered
     *
     * @returns {Promise<any>} A entered home object
     *
     * @throws Error when username is null or empty
     * @throws Error when timestamp is null or empty
     * @throws Error when the user does not exists
     * @throws Error when the timestamp is invalid
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to save when the user leaves the home wifi.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#create-left-home-event}
     * @example
     * POST users/<username>/home-leave | 201 Created | 422 on validation error | 404 on not found
     *
     *
     *  // payload
     *  {
     *    "timestamp": "2020-03-21T15:50:22.000000Z",
     *    "token": "9ce46249294e220f06434d57911a7c4a"
     *  }
     *
     *  //response
     *  {
     *    "entered": "2020-03-21T10:50:22.000000Z",
     *    "left": "2020-03-21T15:50:22.000000Z",
     *    "token": "9ce46249294e220f06434d57911a7c4a",
     *    "created_at": "2020-03-21T14:43:30.000000Z",
     *    "updated_at": "2020-03-21T14:44:44.000000Z"
     *  }
     *
     * @param userName The user name
     * @param timestamp The time when the user has entered
     * @param token The token returned by the last {@link createEnteredHomeEvent}
     *
     * @returns {Promise<any>} A left home object
     *
     * @throws Error when username is null or empty
     * @throws Error when timestamp is null or empty
     * @throws Error when token is null or empty
     * @throws Error when the user does not exists
     * @throws Error when the timestamp or the token is invalid
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to get the information about a specific user.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#get-user}
     * @example
     * GET users/<username> | 200 OK | 404 on not found
     *
     *
     *  //response
     *  {
     *    "seconds": 124513235,
     *    "points": 1341,
     *    "username": "<some username>",
     *    "display_name": "<some display name>",
     *    "created_at": "2020-03-21T09:32:39.000000Z",
     *    "updated_at": "2020-03-21T09:32:39.000000Z",
     *    "nation": "Deutschland",
     *    "city": "Berlin"
     *  }
     *
     * @param userName The user name
     *
     * @returns {Promise<any>} A user object
     *
     * @throws Error when username is null or empty
     * @throws Error when timestamp is null or empty
     * @throws Error when the user does not exists
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to create a new user.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#create-user}
     * @example
     * POST users | 201 Created | 422 on validation error
     *
     *
     *  // payload
     *  {
     *    "username": "<unique username>",
     *    "display_name": "<some display name>",
     *    "nation": "de", //optional country code
     *    "city": "Berlin" //optional
     *  }
     *
     *  //response
     *  {
     *    "username": "raphbibus204",
     *    "display_name": "Ralph",
     *    "points": 0,
     *    "seconds": 0,
     *    "nation": "de",
     *    "city": "Berlin",
     *    "updated_at": "2020-03-21T19:41:02.000000Z",
     *    "created_at": "2020-03-21T19:41:02.000000Z"
     *  }
     *
     * @param userName The user name
     * @param displayName The name that is shown in the profile
     *
     * @returns {Promise<any>} A user object
     *
     * @throws Error when username is null or empty
     * @throws Error when displayname is null or empty
     * @throws Error when the user does already exist
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to create a new user with a nation specified.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#create-user}
     * @example
     * POST users | 201 Created | 422 on validation error
     *
     *
     *  // payload
     *  {
     *    "username": "<unique username>",
     *    "display_name": "<some display name>",
     *    "nation": "de", //optional country code
     *    "city": "Berlin" //optional
     *  }
     *
     *  //response
     *  {
     *    "username": "raphbibus204",
     *    "display_name": "Ralph",
     *    "points": 0,
     *    "seconds": 0,
     *    "nation": "de",
     *    "city": "Berlin",
     *    "updated_at": "2020-03-21T19:41:02.000000Z",
     *    "created_at": "2020-03-21T19:41:02.000000Z"
     *  }
     *
     * @param userName The user name
     * @param displayName The name that is shown in the profile
     * @param nation The country code of where the user is from
     *
     * @returns {Promise<any>} A user object
     *
     * @throws Error when username is null or empty
     * @throws Error when displayname is null or empty
     * @throws Error when nation is null or empty
     * @throws Error when the user does already exist
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to create a new user with a city specified.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#create-user}
     * @example
     * POST users | 201 Created | 422 on validation error
     *
     *
     *  // payload
     *  {
     *    "username": "<unique username>",
     *    "display_name": "<some display name>",
     *    "nation": "de", //optional country code
     *    "city": "Berlin" //optional
     *  }
     *
     *  //response
     *  {
     *    "username": "raphbibus204",
     *    "display_name": "Ralph",
     *    "points": 0,
     *    "seconds": 0,
     *    "nation": "de",
     *    "city": "Berlin",
     *    "updated_at": "2020-03-21T19:41:02.000000Z",
     *    "created_at": "2020-03-21T19:41:02.000000Z"
     *  }
     *
     * @param userName The user name
     * @param displayName The name that is shown in the profile
     * @param city The city the user is from
     *
     * @returns {Promise<any>} A user object
     *
     * @throws Error when username is null or empty
     * @throws Error when displayname is null or empty
     * @throws Error when city is null or empty
     * @throws Error when the user does already exist
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to create a new user with city and country specified.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#create-user}
     * @example
     * POST users | 201 Created | 422 on validation error
     *
     *
     *  // payload
     *  {
     *    "username": "<unique username>",
     *    "display_name": "<some display name>",
     *    "nation": "de", //optional country code
     *    "city": "Berlin" //optional
     *  }
     *
     *  //response
     *  {
     *    "username": "raphbibus204",
     *    "display_name": "Ralph",
     *    "points": 0,
     *    "seconds": 0,
     *    "nation": "de",
     *    "city": "Berlin",
     *    "updated_at": "2020-03-21T19:41:02.000000Z",
     *    "created_at": "2020-03-21T19:41:02.000000Z"
     *  }
     *
     * @param userName The user name
     * @param displayName The name that is shown in the profile
     * @param nation The country code of where the user is from
     * @param city The city the user is from
     *
     * @returns {Promise<any>} A user object
     *
     * @throws Error when username is null or empty
     * @throws Error when displayname is null or empty
     * @throws Error when nation is null or empty
     * @throws Error when city is null or empty
     * @throws Error when the user does already exist
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to add points to a user profile.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#add-points}
     * @example
     * POST users/<username>/points-add | 201 Created | 422 on validation error | 404 on not found
     *
     *
     *  // payload
     *  {
     *    "points": 400 //some integer
     *  }
     *
     *  //response
     *  {
     *    "username": "raphbibus204",
     *    "display_name": "Ralph",
     *    "created_at": "2020-03-21T21:30:31.000000Z",
     *    "updated_at": "2020-03-21T21:30:55.000000Z",
     *    "seconds": 0,
     *    "points": 3400,
     *    "nation": "de",
     *    "city": "Berlin"
     *  }
     *
     * @param userName The user name
     * @param points The number of points to add
     *
     * @returns {Promise<any>} A user object
     *
     * @throws Error when username is null or empty
     * @throws Error when points is no integer
     * @throws Error when the user does not exist
     * @throws Error when the points could not be added
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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

    /**
     * Function to get the leaderboard.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#get-leaderboard}
     * @example
     * GET leaderboard | 200 OK
     *
     *  //response
     *  {
     *      "current_page": 1,
     *      "data": [
     *          {
     *              "username": "wehner.gregorio",
     *              "display_name": "Mrs. Rosalyn Bashirian",
     *              "created_at": "2020-03-21T19:27:40.000000Z",
     *              "updated_at": "2020-03-21T19:27:40.000000Z",
     *              "seconds": 34399,
     *              "points": 196153,
     *              "nation": "id",
     *              "city": "West Kaelynchester"
     *          },
     *          //further results, 20 per page
     *          {
     *              "username": "luigi39",
     *              "display_name": "Katarina Feeney",
     *              "created_at": "2020-03-21T19:27:40.000000Z",
     *              "updated_at": "2020-03-21T19:27:40.000000Z",
     *              "seconds": 1242550,
     *              "points": 115899,
     *              "nation": "ms",
     *              "city": "Caseyberg"
     *          }
     *      ],
     *      "first_page_url": "https://wirvsvirus.agile-punks.com/leaderboard?page=1",
     *      "from": 1,
     *      "last_page": 3,
     *      "last_page_url": "https://wirvsvirus.agile-punks.com/leaderboard?page=3",
     *      "next_page_url": "https://wirvsvirus.agile-punks.com/leaderboard?page=2",
     *      "path": "https://wirvsvirus.agile-punks.com/leaderboard",
     *      "per_page": 20,
     *      "prev_page_url": null,
     *      "to": 20,
     *      "total": 54
     *  }
     *
     * @returns {Promise<any>} A leaderboard object
     *
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
    static async getLeaderboard() {
        const response = await fetch(BASE_URL + "leaderboard", {
            headers: HEADERS
        });

        if (response.status != 200) throw new Error("Something went wrong: " + await response.text());

        return await response.json();
    }

    /**
     * Function to get a leaderboard page.
     *
     * Calls :
     * {@link https://github.com/raphbibus/wirvsvirus_backend#get-leaderboard}
     * @example
     * GET leaderboard | 200 OK
     *
     *  //response
     *  {
     *      "current_page": 1,
     *      "data": [
     *          {
     *              "username": "wehner.gregorio",
     *              "display_name": "Mrs. Rosalyn Bashirian",
     *              "created_at": "2020-03-21T19:27:40.000000Z",
     *              "updated_at": "2020-03-21T19:27:40.000000Z",
     *              "seconds": 34399,
     *              "points": 196153,
     *              "nation": "id",
     *              "city": "West Kaelynchester"
     *          },
     *          //further results, 20 per page
     *          {
     *              "username": "luigi39",
     *              "display_name": "Katarina Feeney",
     *              "created_at": "2020-03-21T19:27:40.000000Z",
     *              "updated_at": "2020-03-21T19:27:40.000000Z",
     *              "seconds": 1242550,
     *              "points": 115899,
     *              "nation": "ms",
     *              "city": "Caseyberg"
     *          }
     *      ],
     *      "first_page_url": "https://wirvsvirus.agile-punks.com/leaderboard?page=1",
     *      "from": 1,
     *      "last_page": 3,
     *      "last_page_url": "https://wirvsvirus.agile-punks.com/leaderboard?page=3",
     *      "next_page_url": "https://wirvsvirus.agile-punks.com/leaderboard?page=2",
     *      "path": "https://wirvsvirus.agile-punks.com/leaderboard",
     *      "per_page": 20,
     *      "prev_page_url": null,
     *      "to": 20,
     *      "total": 54
     *  }
     *
     * @param page Page number of the page to load
     *
     * @returns {Promise<any>} A leaderboard object
     *
     * @throws Error when the page number is not an integer
     * @throws Error when the backend is not available
     *
     * @since 1.0.0
     * @version 1.0.0
     * @author Raphael Hahn
     */
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
