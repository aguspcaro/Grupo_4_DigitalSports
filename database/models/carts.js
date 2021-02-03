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
        }

    };

    let config = {

        tableName: "carts",
        timestamp: true
    };

    let Cart = sequelize.define(alias, cols, config);


    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {

            as: "users",
            foreignKey: "id_user"
        }),
        Cart.hasOne(models.Payment, {  // Aca pongo hasOne y no hasMany, porque en principio solo podes tener medio de pago a la vez. No podes pagar parte en credito y parte en debito. O es debito o es credito o es lo que tenga que ser.
            
            as: "payments",
            foreignKey: "id_payment"
        })
    }

    return Cart;
}