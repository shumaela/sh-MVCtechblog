// customize the comment texts and add more comment

const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Comment 1 on Post 1',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Comment 2 on Post 1',
    user_id: 1,
    post_id: 1
  }
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
