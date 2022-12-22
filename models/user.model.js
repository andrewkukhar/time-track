const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    times: [{ type: Types.ObjectId, ref: 'Time' }]
})

module.exports = model('User', schema)