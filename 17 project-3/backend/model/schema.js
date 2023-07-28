const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        item: {type: String, required: true},
        completed: {type: Boolean, default: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('ToDo', todoSchema)