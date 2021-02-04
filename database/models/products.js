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
            type : dataTypes.STRING(100),
            allowNull: false
        },

        stock:{ 
            type : dataTypes.INTEGER,
            allowNull: false
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
<<<<<<< HEAD
            type : dataTypes.INTEGER 
        },
        
        id_brand:{ 
            type : dataTypes.INTEGER // Deberia ser brand_id
        },
        
        id_sport:{ 
            type : dataTypes.INTEGER // Deberia ser sport_id
=======
            type : dataTypes.INTEGER,
            allowNull: false
        },
        
        brand_id:{ 
            type : dataTypes.INTEGER,
            allowNull: false
        },
        
        sport_id:{ 
            type : dataTypes.INTEGER,
            allowNull: false
>>>>>>> fb34b1c04810769e6d9036fbf6b1383e6fc6176e
        },


        }
        let config = {
            tableName: "products",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
<<<<<<< HEAD
            deletedAt: "deletedAt_at" // deberia ser deleted_at
=======
            deletedAt: "deleted_at",
            paranoid: true
>>>>>>> fb34b1c04810769e6d9036fbf6b1383e6fc6176e
    }

    let Products = sequelize.define(alias, cols, config);

    Products.associate = function(models){
           
         
         
           
            
<<<<<<< HEAD
        Products.hasOne(models.Sizes, { // lo mismo para estos 3. Deberian ser size_id, brand_id, sport_id
=======
        Products.belongsTo(models.Sizes, {
>>>>>>> fb34b1c04810769e6d9036fbf6b1383e6fc6176e
        
            as: "sizes",
            foreignKey: "size_id"
        }),
            
        Products.belongsTo(models.Brands, {
        
            as: "brands",
            foreignKey: "brand_id"
        }),
            
        Products.belongsTo(models.Sports, {
        
            as: "sports",
            foreignKey: "sport_id"
        })


    
    
    }    
    
    return Products;

}
