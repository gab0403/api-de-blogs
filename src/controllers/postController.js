const postService = require('../services/postService');

const getPost = async (req, res) => {
    const result = await postService.getPost();
        return res.status(200).json(result);
};

module.exports = { getPost };