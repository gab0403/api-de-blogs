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

const getPostById = async (id) => {
    const resultBlogPost = await BlogPost.findOne(
      { where: { id }, 
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] },
      );

    if (!resultBlogPost) return { result: { code: 404, message: 'Post does not exist' } };
    return resultBlogPost;
};

module.exports = { getPost, getPostById };