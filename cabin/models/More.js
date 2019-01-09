module.exports = function (sequelize, DataTypes) {
    var More = sequelize.define("More", {
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
            type:DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        flavor: {
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
return More;
};