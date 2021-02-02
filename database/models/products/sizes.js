module.exports =  function(sequelize, dataTypes){

    let alias = "Sizes";

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
            tableName: "sizes",
            Timestamps: true
    }

    let sizes = sequelize.define(alias, cols, config);

    Sizes.associate = function(models){
            
      Sizes.hasMany(models.products, {
      
          as: "sizes",
      foreignKey: "id"
       })
 }

 

return sizes;


}