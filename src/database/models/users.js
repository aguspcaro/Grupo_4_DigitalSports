// ACA LE ESTAMOS EXPLICANDO A SEQUELIZE CUALES Y COMO SON LAS TABLAS
module.exports = function(sequelize, dataTypes) {

    let alias = "User"; // Este alias lo vamos a usar cuando querramos llamar a models.User, en este caso.. para una relacion en otra tabla.
    
    let cols = { // Aca vamos a declarar las columnas que vamos a querer usar de nuestra Base de Datos. Podemos poner todas como algunas de ellas. 

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
            /*unique: true,
            validate: {
                isEmail: { msg : 'Agrega un correo valido'},
                // notEmpty: { msg : 'Correo Obligatorio'},
                isUnique: function (value,next) {
                    var self = this;
                    User.findOne({where: {email: value}})
                        .then(function (usuario) {
                            if (usuario && self.id !== usuario.id) {
                                return next('El eMail ya existe');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return console.log(err)
                        });
                }
            }*/
            
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
            
        }
    };

    let config = { // Aca vamos a especificar como se llama esta tabla en nuestra base de datos. Como se llama users, aca ponemos users. 

        tableName: "users",
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };

    let User = sequelize.define(alias, cols, config); // Esta variable la vamos a usar para hacer la asociacion --> User.associate --> User.hasOne.

    User.associate = function(models) {
        User.hasOne(models.Profile, { // models.Profile (hace referencia al alias que declaramos en el modelo de profiles.js) let alias = "Profile".
            as: "profile", // aca va un nombre fantasia el cual voy a usar mas adelante en el controlador.
            foreignKey: "user_id" // aca va el nombre de la foreignKey dentro de la tabla de profiles. La cual hace la relacion entre las dos tablas.
        }),
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id"
        })
        
    }

    return User; // Aca retornamos la variable a la cual le guardamos todas las configuraciones --> let User = sequelize.define.. 


}