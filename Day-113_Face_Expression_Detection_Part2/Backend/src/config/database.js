const dns=require("node:dns/promises")

dns.setServers(['1.1.1.1','8.8.8.8'])

const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to DB")
        })
        .catch(err => {
            console.log("Error connecting to DB", err)
        })
}

module.exports = connectToDB;