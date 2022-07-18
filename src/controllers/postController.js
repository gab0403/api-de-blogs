const postService = require('../services/postService');

const getPost = async (_req, res) => {
    const result = await postService.getPost();
        return res.status(200).json(result);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const resultId = await postService.getPostById(id);
    if (resultId.result) {
        return res.status(resultId.result.code).json({ message: resultId.result.message });
    }
    res.status(200).json(resultId);
};
module.exports = { getPost, getPostById };