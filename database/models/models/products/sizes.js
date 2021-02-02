module.exports =  function(sequelize, dataTypes){

    let alias = "Sizes";

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
            tableName: "sizes",
            Timestamps: true
    }

    let sizes = sequelize.define(alias, cols, config);

    //Genero.associate = function(models){
      //      Genero.hasMany(models.Pelicula, {
        //        as: "peliculas",
          //      foreignKey: "genre_id"
            //});
 

return sizes;


}