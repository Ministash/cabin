module.exports = function (sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
        customId: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 200]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 200]
            }
        },
        price1: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 1000]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 200]
            }
        },
        servedW: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 200]
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
    
return Food;
};