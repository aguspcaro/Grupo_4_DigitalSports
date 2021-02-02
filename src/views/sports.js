module.exports =  function(sequelize, dataTypes){

    let alias = "Sports";

    let cols={

        id:{
            type : dataTypes.INTEGER ,  
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING
        },

        }
        let config = {
            tableName: "sports",
            Timestamps: true
    }

    let sports = sequelize.define(alias, cols, config);

    //Genero.associate = function(models){
      //      Genero.hasMany(models.Pelicula, {
        //        as: "peliculas",
          //      foreignKey: "genre_id"
            //});
 

return sports;


}