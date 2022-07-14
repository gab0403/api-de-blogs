const userService = require('../services/userService');
const createToken = require('../services/authJWT');

const createUser = async (req, res) => {
    try {
      const { displayName, email, password, image } = req.body;
      await userService.userValidate({ displayName, email, password, image });
      const token = createToken.createToken(email);
        return res.status(201).json({ token });
  } catch (err) {
        if (err.message === 'User already registered') {
           return res.status(409).json({ message: err.message });
        }
        res.status(400).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
    const result = await userService.getUsers();
    return res.status(200).json(result);
};

const getUsersById = async (req, res) => {
    const { id } = req.params;
    const resultId = await userService.getUsersById(id);
    if (resultId.result) {
        return res.status(resultId.result.code).json({ message: resultId.result.message });
    }
    res.status(200).json(resultId);
};

module.exports = { createUser, getUsers, getUsersById };