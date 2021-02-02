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

    let sports = sequelize.define(alias, cols, config);

    Sports.associate = function(models){
            
      Sports.hasMany(models.products, {
      
          as: "sports",
      foreignKey: "id"
       })
 }

return sports;


}