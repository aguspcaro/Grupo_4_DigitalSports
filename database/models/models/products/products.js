module.exports =  function(sequelize, dataTypes){

    let alias = "Products";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING
        },

        description:{ 
            type : dataTypes.STRING
        },

        image:{ 
            type : dataTypes.STRING
        },

        stock:{ 
            type : dataTypes.INTEGER
        },

        category:{ 
            type : dataTypes.STRING
        },

        price:{ 
            type : dataTypes.FLOAT(7,2)
        },
        
        promPrice:{ 
            type : dataTypes.FLOAT(7,2)
        },

        size_id:{ 
            type : dataTypes.INTEGER
        },
        
        brand_id:{ 
            type : dataTypes.INTEGER
        },
        
        sport_id:{ 
            type : dataTypes.INTEGER
        },


        }
        let config = {
            tableName: "products",
            Timestamps: true
    }

    let products = sequelize.define(alias, cols, config);

    //Genero.associate = function(models){
      //      Genero.hasOne(models.Pelicula, {
        //        as: "peliculas",
          //      foreignKey: "genre_id"
            //});
 

return products;


}