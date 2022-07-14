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

module.exports = { createUser };