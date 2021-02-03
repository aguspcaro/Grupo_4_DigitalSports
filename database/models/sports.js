module.exports =  function(sequelize, dataTypes){

    let alias = "Sports";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING(100)
        },

        }
        let config = {
            tableName: "sports",
            Timestamps: true
    }

    let Sports = sequelize.define(alias, cols, config); // ESTA VARIABLE ES LA MISMA QUE SE USA ABAJO EN EL ASSOCIATE?

    Sports.associate = function(models){ // ACA TAMBIEN, SE ESTA DECLARANDO A LA VARIABLE EN MINUSCULA Y SE ESTA QUERIENDO USAR CON MAYUSCULA. O ME EQUIVOCO.
            
        Sports.hasMany(models.Products, {
      
            as: "sports", 
            foreignKey: "id"
        })
    }

    return Sports;


}