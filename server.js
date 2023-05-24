const io = require("socket.io-client");
import { File } from 'form-data';
import fetch from 'node-fetch';


// get config from config.json
const config = require("./config.json");

console.log(config)

const socket = io("https://api.openmhz.com/");

socket.on("connect", () => {
    console.log("Connected to server!");

    const jsonObject = {
        filterCode: [],
        filterType: "talkgroup",
        filterName: "OpenMHZ",
        filterStarred: false,
        shortName: config.shortName
    };
    socket.emit("start", jsonObject);
});

socket.on("new message", (message) => {
    console.log("Message");
    sendMessage(message)

});

socket.on("disconnect", () => {
    console.log("Disconnected from server!");
});

socket.on("error", (error) => {
    console.log("Error:", error);
})

async function sendMessage(message) {

    console.log(message)

    message = JSON.parse(message);

    const formData = new FormData();
    formData.append("call_audio", new File([wavFile], message.url));
    formData.append("call_json", new File([jsonFile], message));

    try {
        const response = await fetch(`${config.endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': config.Authorization,
                // Additional headers go here
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}