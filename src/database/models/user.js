'use strict'
const user = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        underscored: true,
        tableName: 'Users'
    });

    return Users;
};

module.exports = user;