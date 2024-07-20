// Require necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

// Function to set up and start the server
function setupAndStartServer() {
    // Creating an Express application instance
    const app = express();

    // Using built-in middleware to parse JSON bodies
    app.use(bodyParser.json());

    // Using built-in middleware to parse URL-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    // Starting the server on the specified port
    app.listen(PORT, () => {
        console.log(`Server started running at Port: ${PORT}`);
    });
}

// Call the function to start the server
setupAndStartServer();
