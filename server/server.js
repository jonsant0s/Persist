const express = require("express"); // installs the web framework for Node.js
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
const cors = require("cors"); // installs a Node.js package that allows cross origin resource sharing

const allowedOrigins = ["http://localhost:3000"]

const corsOptions = {
    origin: allowedOrigins,
}

require("dotenv").config({ path: "./config.env"}); // dotenv installs the module that loads environment variables from a .env file into process.env
const Db = process.env.ATLAS_URI;
const port = process.env.PORT || 5000; 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json(), urlencodedParser);
app.use(cors(corsOptions));
app.use(express.json());
app.use(require("./routes/user"));
app.use(require("./routes/record"));

mongoose.connect(Db, { useNewUrlParser:true, useUnifiedTopology:true})
.then((res) => {
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
})
.catch(err => console.log(err))
