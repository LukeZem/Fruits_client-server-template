/* eslint-disable no-undef */
const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3000;
const app = express();
const Fruit = require("./models/Fruit.cjs")



// allows use of process.env (getting variables from .env)
require("dotenv").config();

require("./config/db.cjs")

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "relative path to dist folder"))); // allows us to serve our build (dist) folder

app.use(express.json()); // adds .body to the request


// serve the html and js of our react app (dist folder)
const fruits = [];

app.get("/fruits", async (req, res) => {
    let fruitsFromDB = await Fruit.find();
    console.log(fruitsFromDB);
    res.send(fruitsFromDB);
})


app.get("/", (req, res) => {
    res.send("here is your valuable data")
})

app.post("/fruits", async (req, res) => {
    console.log(req.body);
    let fruit = (req.body)
    let responseFromDB = await Fruit.create(fruit)
    console.log(responseFromDB);
    res.send("Route is good")
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});