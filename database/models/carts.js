module.exports = function(sequelize, dataTypes) {

    let alias = "Cart";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        buy_total: {
            type : dataTypes.FLOAT(7,2),
            allowNull:false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        payment_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {

        tableName: "carts",
        timestamp: true,
<<<<<<< HEAD
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
=======
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
>>>>>>> fb34b1c04810769e6d9036fbf6b1383e6fc6176e
    };

    let Cart = sequelize.define(alias, cols, config);


    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {

            as: "users",
            foreignKey: "user_id"
        }),
        Cart.belongsTo(models.Payment, {  
            
            as: "payments",
            foreignKey: "payment_id"
        })
    }

    return Cart;
}