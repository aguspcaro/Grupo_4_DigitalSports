mnodule.exports = function(sequelize, dataTypes) {

    let alias = "User";
    
    let cols = {

        id: {
            type: dataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    let config = {

        tableName: "users",
        timestamp: true
    };

    let User = sequelize.define(alias, cols, config);

    return User;

}