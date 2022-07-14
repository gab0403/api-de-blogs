const joi = require('joi');
const { User } = require('../database/models'); 

const schema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string().required(),
});

const userValidate = async ({ displayName, email, password, image }) => {
   const { error } = schema.validate({ displayName, email, password, image });
    if (error) throw error;

    const user = await User.findOne({ where: { email } });
    const result = await User.create({ displayName, email, password, image });
    if (user) {
     throw new Error('User already registered');
    }
    return result;
};

const getUsers = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return result;
};

const getUsersById = async (id) => {
  const result = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!result) return { result: { code: 404, message: 'User does not exist' } };
  return result;
};

module.exports = { userValidate, getUsers, getUsersById };