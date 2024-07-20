// Require necessary modules
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({
    path: ".env"
});

// Access the PORT variable from the environment
const PORT = process.env.PORT;

// Export the PORT variable
module.exports = { PORT };
