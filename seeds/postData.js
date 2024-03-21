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
  },
  {
    title: 'Post 3 Title',
    content: 'This is the content of post 3.',
    user_id: 3
  },
  {
    title: 'Post 4 Title',
    content: 'This is the content of post 4.',
    user_id: 4
  }
];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
