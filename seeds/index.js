const seedUserData = require('./userData');
const seedPostData = require('./postData');
const seedCommentData = require('./commentData');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();
  await seedPostData();
  await seedCommentData();

  process.exit(0);
};

seedDatabase();
