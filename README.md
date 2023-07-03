# OpenMHZ Forward

A simple Node.js script that forwards messages received from the OpenMHZ API to another endpoint.

## Installation

```shell
git clone https://github.com/S1monlol/openmhzForward.git
cd openmhzForward
npm install
```

## Usage

1. Open the `index.js` file in a text editor.
2. Locate the `sendMessage` function.
3. Modify the `sendMessage` function according to your needs. You can customize the logic for processing and forwarding the received messages.
4. Save the changes to the `index.js` file.


## Configuration
Rename the config.example.json file to config.json.
Open config.json and provide the following information:

```json
{
    "endpoint": "https://api.example.com",
    "shortName": "phillytrs",
    "Authorization": "Bearer wasd"
}
```
