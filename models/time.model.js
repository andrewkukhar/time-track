const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    project: { type: String, required: true },
    hours: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Time', schema)