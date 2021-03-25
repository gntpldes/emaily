const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = props = new Schema({
  googleId: String, 
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
