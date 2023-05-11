const { Comments} = require('../models');
const commentsData = [];

const commentSeeds = () => User.bulkCreate(commentData);

module.exports = commentSeeds;