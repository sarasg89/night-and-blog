const router = require('express').Router();
const { BlogPost } = require('../models');

// GET all the blog posts for the homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogData = await BlogPost.findAll();
        const posts = dbBlogData.map((post) =>
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

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;