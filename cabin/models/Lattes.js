module.exports = function (sequelize, DataTypes) {
    var Lattes = sequelize.define("Lattes", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price1: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price2: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price3: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        flavor: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 150]
            }
        },
        temperature: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 150]
            }
        },
    });
return Lattes;
};