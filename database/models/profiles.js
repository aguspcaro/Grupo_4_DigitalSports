module.exports = function(sequelize, dataTypes) {

    let alias = "Profile";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING,
        },
        first_name: {
            type: dataTypes.STRING(100)
        },
        last_name: {
            type: dataTypes.STRING(100)
        },
        age: {
            type: dataTypes.INTEGER
        },
        birthday: {
            type: dataTypes.DATEONLY
        },
        user_id: {
            type: dataTypes.INTEGER
        }
};

    let config = {

        tableName: "profiles",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };

    let Profile = sequelize.define(alias, cols, config);


    Profile.associate = function(models) {
        Profile.belongsTo(models.User, {

            as: "user",
            foreignKey: "user_id" // profile no tiene foreignKey dentro de user. Pero se relacionan a traves de esta foreignKey. Por eso va la de user_id.
        })
    }
    return Profile;
}
