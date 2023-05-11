const { Post } = require('../models');
const postsData = [
    {
        subject: 'Post One',
        article: 'Article test one',
        user_id: 1,
    },
    {
        subject: 'Post Two',
        article: 'Article test two',
        user_id: 2,
    },
];

const postSeeds = () => Post.bulkCreate(postsData);

module.exports = postSeeds;