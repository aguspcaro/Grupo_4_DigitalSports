module.exports = function(sequelize, dataTypes) {

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
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    let Payment = sequelize.define(alias, cols, config);

    Payment.associate = function(models) {
        Payment.belongsTo(models.Cart, {

            as: "carts",
            foreignKey: "payment_id"
        })
    }

    return Payment;

}