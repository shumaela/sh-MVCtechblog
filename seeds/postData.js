// still need to add more postData

const { Post } = require('../models');

const postData = [
  {
    title: 'Post 1 Title',
    content: 'This is the content of post 1.',
    user_id: 1
  },
  {
    title: 'Post 2 Title',
    content: 'This is the content of post 2.',
    user_id: 2
  }
];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
