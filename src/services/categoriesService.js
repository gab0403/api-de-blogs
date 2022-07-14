const { Category } = require('../database/models');

const createCategory = async (name) => {
    if (!name) return { result: { code: 400, message: '"name" is required' } };
    const result = await Category.create({ name });
    return result;
};

const getCategories = async () => {
    const result = await Category.findAll();
    return result;
};

module.exports = { createCategory, getCategories };