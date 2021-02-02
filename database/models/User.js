mnodule.exports = function(sequelize, dataTypes) {

    let alias = "User";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {

        tableName: "users",
        timestamp: true
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasOne(models.Profile, {
            as: "profiles",
            foreignKey: "id_user"
        })
    }

    return User;


}