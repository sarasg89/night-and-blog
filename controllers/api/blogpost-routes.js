const router = require('express').Router();
const { BlogPost } = require('../../models');

// CREATE new blogpost
router.post('/', async (req, res) => {
    try {
        const blogpostData = await BlogPost.create({
            user_id: req.session.user_id,
            title: req.body.title,
            post_text: req.body.post_text,
        });
        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;