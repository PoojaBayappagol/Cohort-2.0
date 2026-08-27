const mongoose = require('mongoose')

const dns=require('node:dns/promises')

dns.setServers(['1.1.1.1','8.8.8.8'])

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to Database")
        })
}

module.exports = connectToDB