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
      // need to add here that if user is logged in then to only display logout button and remove login/signup
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // Render the login page
  res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
  // Render the signup page
  res.render('signup');
});

// New post route
router.get('/newpost', (req, res) => {
  // Render the new post page
  res.render('newpost');
});

// Edit post route
router.get('/editpost/:id', async (req, res) => {
  try {
    // Find the post by ID
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    // Serialize post data
    const post = postData.get({ plain: true });

    // Render the edit post page with post data
    res.render('editpost', { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Specific post route
router.get('/post/:id', async (req, res) => {
  try {
    // Find the post by ID with associated user and comments
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: ['username'] }]
        }
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    // Serialize post data
    const post = postData.get({ plain: true });

    // Render the post page with post data
    res.render('post', { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard route
router.get('/dashboard', async (req, res) => {
  try {
    // Ensure the user is logged in
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }

    // Get all posts created by the logged-in user
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
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

    // Render the dashboard page with posts created by the user
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in 
      // need to add here that if user is logged in then to only display logout button and remove login/signup
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



