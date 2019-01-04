module.exports = function (sequelize, DataTypes) {
    var Coffee = sequelize.define("Coffee", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price2: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price3: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        madeW: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        div: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 150]
            }
        },
    });
    return Coffee;
};