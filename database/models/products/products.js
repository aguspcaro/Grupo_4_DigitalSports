module.exports =  function(sequelize, dataTypes){

    let alias = "Products";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type : dataTypes.STRING(100),
            allowNull: false
        },

        description:{ 
            type : dataTypes.STRING(255),
            allowNull: false
        },

        image:{ 
            type : dataTypes.STRING(100)
        },

        stock:{ 
            type : dataTypes.INTEGER
        },

        category:{ 
            type : dataTypes.STRING(50),
            allowNull: false
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

    Products.associate = function(models){
           
            
            products.hasOne(models.sizes, {
            
                as: "sizes",
            foreignKey: "id_size"
             }),
             
            products.hasOne(models.brands, {
            
                as: "brands",
            foreignKey: "id_brand"
             }),
             
            products.hasOne(models.sports, {
            
                as: "sports",
            foreignKey: "id_sport"
             })


        
        
        }
    
         
 

return products;


}