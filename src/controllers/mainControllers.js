const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models/index")

let mainControllers = {
  index: function (req, res, next) {

    let userLogueado;

    if (req.session != undefined) {
     userLogueado = req.session.user;
    }
    else {
      userLogueado = {}
    }
    
    let promesaLanzamientos = db.Products.findAll(
      {
        where: {
          category: "Lanzamientos"
      }
    }
    )

    let promesaOfertas = db.Products.findAll(
      {
        where: {
          category: "Ofertas"
      }
    }
    )

    let promesaDestacados = db.Products.findAll(
      {
        where: {
          category: "Destacados"
      }
    }
    )

    let promesaRecomendados= db.Products.findAll(
      {
        where: {
          category: "Recomendados"
      }
    }
    )


  Promise.all([promesaDestacados, promesaOfertas, promesaLanzamientos, promesaRecomendados, ])
    .then(function(resultado) {
      res.render('index', {resultado,userLogueado})
    })
    .catch(function(err) {
      console.log(err)
    })  
},

  search: function (req, res) {

    let seEncontro = req.query.homeSearch.trim().toUpperCase()



    console.log(seEncontro)

    db.Products.findAll(
      {
        where: {
         name : seEncontro
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/search', {resultadoBusqueda, userLogueado:{}})
    })
    .catch(function(err) {
      console.log(err)
    })
  },

  mujer: function (req, res) {
    db.Products.findAll(
      {
        where: {
          public: "mujeres"
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/mujer', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  hombre: function (req, res) {
    db.Products.findAll(
      {
        where: {
          public: "hombres"
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/hombre', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  chicos:  function (req, res) {
    db.Products.findAll(
      {
        where: {
          public: "niños"
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/chicos', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  sports: function(req, res) {

 let busquedaRunning =  db.Products.findAll(
  {
    include: {association: 'sports'},
    where: {
      sport_id: 1
    } 
  },
  )

  let busquedaFutbol=  db.Products.findAll(
    {
      include: {association: 'sports'},
      where: {
        sport_id: 2
      } 
    },
    )


    let busquedaTenis =  db.Products.findAll(
      {
        include: {association: 'sports'},
        where: {
          sport_id: 3
        } 
      },
      )
    
      let busquedaBasquet=  db.Products.findAll(
        {
          include: {association: 'sports'},
          where: {
            sport_id: 4
          } 
        },
        )


        
    let busquedaRugby =  db.Products.findAll(
      {
        include: {association: 'sports'},
        where: {
          sport_id: 5
        } 
      },
      )
    
      let busquedaNatacion=  db.Products.findAll(
        {
          include: {association: 'sports'},
          where: {
            sport_id: 6
          } 
        },
        )
    

        let busquedaVoley =  db.Products.findAll(
          {
            include: {association: 'sports'},
            where: {
              sport_id: 7
            } 
          },
          )
        
          let busquedaBoxeo =  db.Products.findAll(
            {
              include: {association: 'sports'},
              where: {
                sport_id: 8
              } 
            },
            )
        
              
          let busquedaUrbano =  db.Products.findAll(
            {
              include: {association: 'sports'},
              where: {
                sport_id: 10
              } 
            },
            )
            
        
     Promise.all([busquedaRunning, busquedaFutbol, busquedaTenis, busquedaBasquet, busquedaRugby, busquedaNatacion, busquedaVoley, busquedaBoxeo, busquedaUrbano])


    .then(function(resultadoBusqueda) {
      res.render('products/sports', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  marcas: function(req, res) {

    let busquedaAdidas =  db.Products.findAll(
     {
       include: {association: 'brands'},
       where: {
         brand_id: 1
       } 
     },
     )


     let busquedaNike =  db.Products.findAll(
      {
        include: {association: 'brands'},
        where: {
          brand_id: 2
        } 
      },
      )
   
    
      let busquedaPuma =  db.Products.findAll(
        {
          include: {association: 'brands'},
          where: {
            brand_id: 3
          } 
        },
        )
   
   
        let busquedaLotto =  db.Products.findAll(
         {
           include: {association: 'brands'},
           where: {
             brand_id: 4
           } 
         },
         )
               

         let busquedaFila =  db.Products.findAll(
          {
            include: {association: 'brands'},
            where: {
              brand_id: 5
            } 
          },
          )
     
     
          let busquedaHavaianas =  db.Products.findAll(
           {
             include: {association: 'brands'},
             where: {
               brand_id: 6
             } 
           },
           )
                

           
         let busquedaReebok =  db.Products.findAll(
          {
            include: {association: 'brands'},
            where: {
              brand_id: 7
            } 
          },
          )
     
     
          let busquedaTopper =  db.Products.findAll(
           {
             include: {association: 'brands'},
             where: {
               brand_id: 8
             } 
           },
           )


           
          let busquedaUmbro =  db.Products.findAll(
            {
              include: {association: 'brands'},
              where: {
                brand_id: 9
              } 
            },
            )
              

            let busquedaUnderArmour =  db.Products.findAll(
              {
                include: {association: 'brands'},
                where: {
                  brand_id: 10
                } 
              },
              )
                
               
           
        Promise.all([busquedaAdidas, busquedaNike, busquedaPuma, busquedaLotto, busquedaFila, busquedaHavaianas, busquedaReebok, busquedaTopper, busquedaUmbro, busquedaUnderArmour])
   
   
       .then(function(resultadoBusqueda) {
         res.render('products/marcas', {userLogueado: {}, resultadoBusqueda})
       })
       .catch(function(err) {
         console.log(err)
       })
     }
}




module.exports = mainControllers;