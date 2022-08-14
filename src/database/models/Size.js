module.exports =  function(sequelize, dataTypes){

    let alias = "Sizes";

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
            tableName: "sizes",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            paranoid: true
    }

    let Sizes = sequelize.define(alias, cols, config);

    Sizes.associate = function(models){
            
        Sizes.hasMany(models.Products, {
      
            as: "products",
            foreignKey: "size_id"
        })
    }

 

    return Sizes;


}