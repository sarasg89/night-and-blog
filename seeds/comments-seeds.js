const { Comment } = require('../models');

const commentData = [
    {
        post_id: '1',
        user_id: '2',
        comment_text: 'I AM NOT A BIRD, DENNIS!',
    },
    {
        post_id: '2',
        user_id: '1',
        comment_text: 'bird.',
    },
    {
        post_id: '2',
        user_id: '3',
        comment_text: 'BIRD.',
    },
    {
        post_id: '2',
        user_id: '4',
        comment_text: 'B I R D!',
    },
    {
        post_id: '2',
        user_id: '5',
        comment_text: 'Sorry, but yes - bird.',
    },
    {
        post_id: '3',
        user_id: '5',
        comment_text: 'This sounds really traumatic.. lol',
    },
    {
        post_id: '4',
        user_id: '1',
        comment_text: 'Great work, Charlie - but less typing, more bashing.',
    },
    
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;