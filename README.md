For project to work you have to create 2 file. First one named "environment.json.ts" in folder "environment". Its structure should look like this:

//

export const CONFIG = { 
    "API_KEY": ""
}

//

And the second one which structure should look like this:

//

export const getToken = { 
    "API_TOKEN": ""
}

//

In the quotes you should put your own API_KEY and API_TOKEN that you can generate right here: https://trello.com/power-ups/admin.

After you open the website you need need to click New and create your own power-up. What you have to do next is click on "API key" tab where you can find api key, to generate your own token you have to click on blue highlighted link called "token" to the right of api key. You need to authorize your app by clicking allow and thats how you get your API token. 
