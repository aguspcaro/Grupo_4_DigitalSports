module.exports =  function(sequelize, dataTypes){

    let alias = "Brands";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING(100),
            allowNull: false
        },

        }
        let config = {
            tableName: "brands",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at", 
            paranoid: true
    }

    let Brands = sequelize.define(alias, cols, config);

    Brands.associate = function(models){
            
        Brands.hasMany(models.Products, {
      
            as: "brands",
            foreignKey: "brand_id"
        })
    }

 

    return Brands;


}