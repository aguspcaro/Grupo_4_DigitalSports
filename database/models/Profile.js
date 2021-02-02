mnodule.exports = function(sequelize, dataTypes) {

    let alias = "Profile";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        age: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        birthday: {
            type: dataTypes.DATEONLY,
            allowNull: false
        }

    };

    let config = {

        tableName: "profiles",
        timestamp: true
    };

    let Profile = sequelize.define(alias, cols, config);

    return Profile;
}
