const userSeeds = require('./userData');
const postSeeds= require('./postData');
const commentSeeds = require('./commentsData');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    await userSeeds();
    await postSeeds();
    await commentSeeds();

    process.exit(0);
};

seedAll();