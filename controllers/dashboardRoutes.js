// fill out to match with dashboard.handlebars

const router = require('express').Router();
const { Post } = require('../models');
const isAuthenticated = require('../utils/auth');

// Route to render the dashboard page
router.get('/', isAuthenticated, async (req, res) => {
  try {
    // Fetch any necessary data for the dashboard
    // For example, you might fetch the user's posts
    const userPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id // Assuming user ID is stored in the session
      }
    });

    // Render the dashboard.handlebars view and pass data to it
    res.render('dashboard', { 
      user: req.user, // Pass user information to the view
      posts: userPosts // Pass user's posts to the view
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to handle creating a new blog post
router.get('/new', isAuthenticated, async (req, res) => {
  try {
  
    res.render('newpost', { 
      logged_in: req.session.logged_in  // Pass user information to the view
     
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add more routes as needed for dashboard functionality (e.g., updating/deleting posts)

module.exports = router;

