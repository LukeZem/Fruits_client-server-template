

// create a schema (breakdown of what our data looks like)
const mongoose = require('mongoose');

const fruitsSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        age: Number,
        readyToEat: Boolean
    },
    {
        timestamps: true,
    }
);





// create a model with that schema
const Fruit = mongoose.model("Fruit",            fruitsSchema); 
//                          1. ^ collection name, 2. ^ the schema


module.exports = Fruit;






