const loginService = require('../services/loginService');
const createToken = require('../services/authJWT');

const login = async (req, res) => {
const { email, password } = req.body;
const resultLogin = await loginService.validateLogin({ email, password });
if (resultLogin.result) {
    return res.status(resultLogin.result.code).json({ message: resultLogin.result.message });
}
const token = createToken.createToken(email);
return res.status(200).json({ token });
};

module.exports = { login };
