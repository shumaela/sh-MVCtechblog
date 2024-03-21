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
  },
  {
    username: 'user3',
    password: 'password3',
    email: 'user3@gmail.com'
  },
  {
    username: 'user4',
    password: 'password4',
    email: 'user4@gmail.com'
  }
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
