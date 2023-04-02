const router = require('express').Router();
const { BlogPost, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

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

// EDIT a blogpost
router.put('/:id', async (req, res) => {
  try {
    const updatedBlogpostData = await BlogPost.update(
      {
        title: req.body.title,
        post_text: req.body.post_text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatedBlogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a blogpost
router.delete('/:id', async (req, res) => {
  try {
    const deleteBlogpostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteBlogpostData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(deleteBlogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET comment for a blogpost
router.get('/comments/:id', withAuth, async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      where: {
        id: req.params.id,
      },
      include: [{ model: User }, { model: Comment }],
    })
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [{ model: User }],
    })

    const posts = blogData.map((post) =>
      post.get({ plain: true })
    );

    const comments = commentData.map((comment) =>
      comment.get({ plain: true })
    );

    console.log(posts[0].comments[0])
    res.render('view-post', {
      post: posts[0],
      comments,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;