module.exports = function (sequelize, DataTypes) {
    var SauceNSyrupList = sequelize.define("SauceNSyrupList", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 100]
            }
        }
    });
return SauceNSyrupList;
};