const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>
{

    const Users= sequelize.define("Users",{
        email: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        

    })

    return Users
}