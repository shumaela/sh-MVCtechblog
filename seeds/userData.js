// still need to add more users

const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    password: 'password1',
    email: 'user1@gmail.com'
  },
  {
    username: 'user2',
    password: 'password2',
    email: 'user2@gmail.com'
  }
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
