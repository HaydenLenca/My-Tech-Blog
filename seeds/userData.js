const { User } = require('../models');
const userData = [];

const userSeeds = () => User.bulkCreate(usersData);

module.exports = userSeeds;