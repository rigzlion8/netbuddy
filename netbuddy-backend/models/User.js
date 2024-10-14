const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coins: { type: Number, default: 100 },
  premium: { type: Boolean, default: false },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
