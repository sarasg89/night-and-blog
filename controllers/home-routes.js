const router = require('express').Router();
const { BlogPost } = require('../models');
const withAuth = require('../utils/auth');

// GET all the blog posts for the homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll();
        const posts = blogData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// GET the user's blog post for the dashboard
// Prevent non logged in users from viewing the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            where: {
                user_id: req.session.user_id,
            }
        })
        const posts = blogData.map((post) =>
            post.get({ plain: true })
        );

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;