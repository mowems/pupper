const mongoose = require('mongoose');

const authenticationSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})

const swipeSchema = new mongoose.Schema({
  like: Boolean,
  user1: Number,
  user2: Number
})

const messageSchema = new mongoose.Schema({
  body: String,
  sender: String
},
{timestamps: true}
);

const chatSchema = new mongoose.Schema({
  time: Date,
  users: [],
  messages: [messageSchema]

});

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  size: String,
  energy: String,
  offLeash: Boolean,
  ownerName: String,
  ownerNumber: String,
  location: String,
  aboutMe: String,
  photos: [],
  prefrences: {
    age: Number,
    breed: String,
    size: String,
    energy: String,
    offLeash: Boolean,
  },
  chats: [],
  swipes: [swipeSchema],
  username: String

});

const Profile = mongoose.model('Profile', profileSchema);
const Chat = mongoose.model('Chat', chatSchema);
const Swipe = mongoose.model('Swipe', swipeSchema);
const Auth = mongoose.model('Auth', authenticationSchema);

module.exports = { Profile, Chat, Swipe, Auth };