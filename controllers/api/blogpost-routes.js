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

module.exports = router;