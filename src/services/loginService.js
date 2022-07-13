const { User } = require('../database/models'); 

const validateLogin = async ({ email, password }) => {
    if (!email || !password) {
         return { result: { code: 400, message: 'Some required fields are missing' } }; 
    }
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
    return { result: { code: 400, message: 'Invalid fields' } }; 
    }
    return true;
};

module.exports = { validateLogin };