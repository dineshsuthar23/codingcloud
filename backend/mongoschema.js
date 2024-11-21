const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
})

const User = mongoose.model('user', schema);

module.exports = User