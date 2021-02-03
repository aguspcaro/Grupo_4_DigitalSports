module.exports =  function(sequelize, dataTypes){

    let alias = "Brands";

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
            tableName: "brands",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deletedAt_at"
    }

    let Brands = sequelize.define(alias, cols, config);

    Brands.associate = function(models){
            
        Brands.hasMany(models.Products, {
      
            as: "brands",
            foreignKey: "id"
        })
    }

 

    return Brands;


}