const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = PROXY_URL + "https://wirvsvirus.agile-punks.com/";
const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

export default class Api {
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

    static async getUser(userName) {
        const response = await fetch(BASE_URL + "users/" + userName, {
            headers: HEADERS
        });
        return await response.json();
    }
}
