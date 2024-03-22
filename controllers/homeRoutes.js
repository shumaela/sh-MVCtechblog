// still need to add more routes!!!


const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Homepage route
router.get('/', async (req, res) => {
  try {
    // Get all posts with associated user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id']
        }
      ],
    });

    // Serialize data so template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in 
      // need to add here that is user is logged in then to only display logout button and remove login/signup
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

