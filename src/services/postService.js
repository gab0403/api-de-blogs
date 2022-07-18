const { BlogPost } = require('../database/models');
const { Category } = require('../database/models');
const { User } = require('../database/models'); 

const getPost = async () => {
    const resultPost = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return resultPost;
};

module.exports = { getPost };