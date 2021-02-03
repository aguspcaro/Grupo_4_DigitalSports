mnodule.exports = function(sequelize, dataTypes) {

    let alias = "Payment";
    
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        method: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {

        tableName: "payments",
        timestamp: true
    };

    let Payment = sequelize.define(alias, cols, config);

    Payment.associate = function(models) {
        Payment.belongsTo(models.Cart, {

            as: "carts",
            foreignKey: "id_payment"
        })
    }

    return Payment;

}