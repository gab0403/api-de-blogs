const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const resultCategory = await categoriesService.createCategory(name);
    if (resultCategory.result) {
      return res
      .status(resultCategory.result.code)
      .json({ message: resultCategory.result.message });
    }
    res.status(201).json(resultCategory);
};

const getCategories = async (_req, res) => {
    const result = await categoriesService.getCategories();
    return res.status(200).json(result);
};

module.exports = { createCategory, getCategories };