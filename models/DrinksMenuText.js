module.exports = function (sequelize, DataTypes) {
    var DrinksMenuText = sequelize.define("DrinksMenuText", {
        text: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 500]
            }
        }, category: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 500]
            }
        }
    });
    return DrinksMenuText;
};