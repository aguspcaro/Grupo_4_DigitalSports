module.exports =  function(sequelize, dataTypes){

    let alias = "Products"; // EN LA ASOCIACION QUE HACEMOS EN SPORTS, VAS A TENER QUE LLAMARLO CON ESTE MISMO NOMBRE. CON  MAYUSCULA.

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
        
        id_brand:{ 
            type : dataTypes.INTEGER // Deberia ser brand_id
        },
        
        id_sport:{ 
            type : dataTypes.INTEGER // Deberia ser sport_id
        },


        }
        let config = {
            tableName: "products",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deletedAt_at" // deberia ser deleted_at
    }

    let Products = sequelize.define(alias, cols, config);

    Products.associate = function(models){
           
         
         
           
            
        Products.hasOne(models.Sizes, { // lo mismo para estos 3. Deberian ser size_id, brand_id, sport_id
        
            as: "sizes",
            foreignKey: "id_size"
        }),
            
        Products.hasOne(models.Brands, {
        
            as: "brands",
            foreignKey: "id_brand"
        }),
            
        Products.hasOne(models.Sports, {
        
            as: "sports",
            foreignKey: "id_sport"
        })


    
    
    }    
    
    return Products;

}
