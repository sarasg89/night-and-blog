const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        id: 1,
        username: 'brian_lefevre',
        email: 'dennis@email.com',
        password: 'goldengod',
    },
    {
        id: 2, 
        username: 'martina_martinez',
        email: 'sweetdee@email.com',
        password: 'standup'
    },
    {
        id: 3,
        username: 'dr_mantis_toboggan',
        email: 'freynolds@email.com',
        password: 'frogkid',
    },
    {
        id: 4,
        username: 'gingerbread_man',
        email: 'charlie@email.com',
        password: 'password123',
    },
    {
        id: 5,
        username: 'city_mac',
        email: 'ronald.mcdonald@email.com',
        password: 'eagles',
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;