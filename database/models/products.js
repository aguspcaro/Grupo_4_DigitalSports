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
        
        public:{ 
            type : dataTypes.STRING(50),
            allowNull: false
        },

        shipping:{ 
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
            type : dataTypes.INTEGER,
            
        },
        
        brand_id:{ 
            type : dataTypes.INTEGER,
           
        },
        
        sport_id:{ 
            type : dataTypes.INTEGER,
           
        },


        }
        let config = {
            tableName: "products",
            timestamps: true,
            createdAt: "created_at",
           updatedAt: "updated_at",
           deletedAt: "deleted_at",
            paranoid: true
    }

    let Products = sequelize.define(alias, cols, config);


    Products.associate = function(models){
           
         
         
           
            
        Products.belongsTo(models.Sizes, {
        
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
