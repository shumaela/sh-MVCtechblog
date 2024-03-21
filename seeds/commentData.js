// customize the comment texts?

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
  },
  {
    comment_text: 'Comment 3 on Post 1',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Comment 4 on Post 1',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Comment 1 on Post 2',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Comment 2 on Post 2',
    user_id: 1,
    post_id: 2
  }
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
