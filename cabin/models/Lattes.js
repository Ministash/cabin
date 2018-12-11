module.exports = function (sequelize, DataTypes) {
    var Lattes = sequelize.define("Lattes", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        flavor: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [1, 150]
            },
            temperature: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
                validate: {
                    len: [1, 150]
                }
            }

        }
    });
    return Lattes;
};