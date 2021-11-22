const express = require("express"); // installs the web framework for Node.js
const app = express();
const cors = require("cors"); // installs a Node.js package that allows cross origin resource sharing
require("dotenv").config({ path: "./config.env"}); // dotenv installs the module that loads environment variables from a .env file into process.env
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function(err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});
