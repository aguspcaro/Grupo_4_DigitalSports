let fs = require('fs')
let path = require('path')
let db = require('../../database/models')
const { get } = require('../../routes/main')


let productsControllers =  {

    list: function(req, res) {

        db.Products.findAll({
        })   
        .then(resultado => {

            let destacados = 0;
            let recomendados=0;
            let ofertas=0;
            let lanzamientos=0;


        resultado.forEach(element => {

            if (element.category == "destacados") {
                destacados++
            } else if  (element.category == "ofertas") {
                ofertas++
            } else if  (element.category == "lanzamientos") {
                lanzamientos++
            } else if (element.category == "recomendados") {
                recomendados++
            }

            
            });

            let respuesta = {
                meta: {
                    status:200,
                    count: resultado.length,
                    countByCategory: {
                        countOfertas: ofertas,
                        contDestacados: destacados,
                        countRecomendados: recomendados,
                        countLanzamientos: lanzamientos
                    },
                    url: 'api/products'
                },
                products: resultado
                    
            }

            res.json(respuesta)

        })

        .catch(error => {console.log(error);})

    }
}
module.exports= productsControllers