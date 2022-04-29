const express = require("express");
require("dotenv").config();


const app = express();

const connect = require("./src/configs/db");




const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
    await connect();
    console.log(`Server running on Port ${PORT}`);
});
