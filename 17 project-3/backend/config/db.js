const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(conn => console.log(`Connected MongoDB: ${conn.connection.host}`.cyan))
    .catch(err => console.log(err))
}

module.exports = connectDB