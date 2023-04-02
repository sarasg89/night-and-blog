const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all the blog posts for the homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            include: [{ model: User }],
        });
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

// GET one blog post
router.get('/blogpost/:id', async (req, res) => {
    try {
        const blogpostData = await BlogPost.findByPk(req.params.id);
        if (!blogpostData) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }
        const post = blogpostData.get({ plain: true });
        res.render('edit-blogpost', {
            post,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
})

// GET the user's blog post for the dashboard
// Prevent non logged in users from viewing the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [{ model: User }],
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