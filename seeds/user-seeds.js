const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: 'brian_lefevre',
        email: 'dennis@email.com',
        password: 'goldengod',
    },
    {
        username: 'martina_martinez',
        email: 'sweetdee@email.com',
        password: 'standup'
    },
    {
        username: 'dr_mantis_toboggan',
        email: 'freynolds@email.com',
        password: 'frogkid',
    },
    {
        username: 'gingerbread_man',
        email: 'charlie@email.com',
        password: 'password123',
    },
    {
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