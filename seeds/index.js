const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedBlogposts = require('./blogpost-seeds');
const seedComments = require('./comments-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlogposts();
  console.log('\n----- BLOG POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
