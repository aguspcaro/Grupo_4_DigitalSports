let fs = require('fs')
let path = require('path')
let db = require('../../database/models')
const {
    get
} = require('../../routes/main')


let productsControllers = {

    list: function (req, res) {

        db.Products.findAll({
                include: [{
                    association: 'sizes'
                }, {
                    association: 'brands'
                }, {
                    association: 'sports'
                }],
                /*  attributes: { exclude: ['image','stock', 'public', 'shipping','price', 'promPrice', 'size_id','brand_id', 'sport_id','created_at','updated_at', 'delet                                ed_at'] } */
            })
            .then(resultado => {

                let destacados = 0;
                let recomendados = 0;
                let ofertas = 0;
                let lanzamientos = 0;

                let resultadoDatosSolicitados = [];


                resultado.forEach(element => {

                    if (element.category == "destacados") {
                        destacados++
                    } else if (element.category == "ofertas") {
                        ofertas++
                    } else if (element.category == "lanzamientos") {
                        lanzamientos++
                    } else if (element.category == "recomendados") {
                        recomendados++
                    }
                });

  


                resultado.forEach(element => {
                    resultadoDatosSolicitados.push({
                        id: element.id,
                        name: element.name,
                        description: element.description,
                        belongsToOne: {
                            sizes: element.sizes.name,
                            sports: element.sports.name,
                            brands: element.brands.name,
                        },
                        endpoint: `api/products/${element.id}`
                    })
                })


                let respuesta = {
                    meta: {
                        status: 200,
                        count: resultado.length,
                        countByCategory: [
                            {name : "Ofertas" , cantidad: ofertas},
                            {name : "Destacados", cantidad: destacados},
                            {name :"Recomendados", cantidad: recomendados},
                            {name : "Lanzamientos", cantidad: lanzamientos}
                        ],
                        url: 'api/products',
                    },
                    products: resultadoDatosSolicitados,
                }

                res.json(respuesta)

            })

            .catch(error => {
                console.log(error);
            })

    },
       secondary : async (req,res) => {

        try {
            let promesas = db.Brands.findAll()

            let resultado =  await promesas
    
            res.send(resultado)
    
        } catch (err) {
            console.log(err)
        }
      
    },
    detail: function (req, res) {
        db.Products.findByPk(req.params.id, {

                include: ['sizes', 'brands', 'sports']
                
            })

            .then(function (product) {
                
                console.log(product);
                let envio = {
                    meta: {
                        status: 200,
                            
                    },
                    product: product
                        
                }



                res.json(envio);


            })

            .catch(error => {
                console.log(error);
            })

    }


}



module.exports = productsControllers