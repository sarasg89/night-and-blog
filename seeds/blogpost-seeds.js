const { BlogPost } = require('../models');

const postData = [
    {
        user_id: '1',
        title: 'Hello, world!',
        post_text: 'This is the first blogpost in a series of posts! I hope that this blog grows to contain a large amount of useful and engaging content. Dee\'s a bird.',
    },
    {
        user_id: '2',
        title: 'Am I a bird?',
        post_text: 'As the title says, really. Dennis said I look like a "Skeletal Bird" today and it\'s been weighing on my mind since.. So, dear readers, am I a bird?',
    },
    {
        user_id: '3',
        title: 'Therapist unzipped my brain today. I\'m unzipped.',
        post_text: 'I went to see the shrink today with Charlie and the gang. She tried to get into my head about a certain incident involving me and one of my acquantainces (spelling?) when I was a kid. Wound up crying and spitting sunflower seeds at her... to be continued when I\'ve calmed down a little.',
    },
    {
        user_id: '4',
        title: 'Ratbashing - a methodology.',
        post_text: "Hey. So. Ratbashing. You're going to want to get yourself a nice, big baseball bat. NEXT you're going to need some protective clothing - rats are wily and aggressive when cornered.. Last thing you want is a face full of tetanus whilst trying to deal with your rodent problemos LOL",
    },
];

const seedBlogposts = () => BlogPost.bulkCreate(postData);

module.exports = seedBlogposts;