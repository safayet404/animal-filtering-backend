const { default: mongoose } = require("mongoose")
const dotenv = require('dotenv').config()
const NAME = process.env.NAME
const PASS = process.env.PASSWORD
console.log(NAME);


const connectDB = async ()=>{
    await mongoose.connect(`mongodb+srv://${NAME}:${PASS}@animal-filtering-job-ta.mtsrz.mongodb.net/animal-filtering-job-task`)
    console.log(`the db is connect with ${mongoose.connection.host}`);
}

module.exports = connectDB

