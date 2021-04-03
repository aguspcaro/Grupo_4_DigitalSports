let fs = require('fs')
let path = require('path')
let db = require('../../database/models')
const { get } = require('../../routes/main')


let usersControllers =  {

    list: function(req, res) {

        db.User.findAll({
            include: [{association: "profile"}],
            attributes: { exclude: ['password'] }
        })
            
        .then(dato => {
            let datoNuevo =[]
            dato.forEach(user => {
                
                if(user.profile == null){ 
                    datoNuevo.push({id: user.id, email: user.email, name: null})
                } else {
                    datoNuevo.push({id: user.id, email: user.email, name: user.profile.first_name})

                }
            });


            let config = {
                meta: {
                    status: 200,
                    count: dato.length,
                    url: "api/users"

                },
                body: datoNuevo
                    
            }

            res.json(config)

        })

        .catch(errno => {console.log(errno);})

    },
    detail: function(req, res){

        db.User.findByPk(req.params.id, 
            {
                include: [{association: "profile"}],
                attributes: { exclude: ['password'] }
            }
        )

        .then(dato => {

            let config;

            if(dato.profile == null){ 

                config = {
                    meta: {
                        name: null,
                        lastName: null,
                        age: null,
                        birthday: null,
                        email: dato.email,
                        urlImage: "api/users/image/" + req.params.id
    
                    }                        
                
                }

            } else {

                config = {
                    meta: {
                        name: dato.profile.first_name,
                        lastName: dato.profile.last_name,
                        age: dato.profile.age,
                        birthday: dato.profile.birthday,
                        email: dato.email,
                        urlImage: "api/users/image/" + req.params.id
    
                    }
                        
                }
            }            

            res.json(config)
        })

        .catch(errno =>{console.log(errno);})

    },
    image: function(req, res){
        
        db.User.findByPk(req.params.id, 
            {
                include: [{association: "profile"}],
                attributes: { exclude: ['password'] }
            }
        )

        .then(dato => {

            let config;

            if(dato.profile == null){ 

                config = {
                    meta: {
                        urlImage: null,
                        urlUser: 'api/users/' + req.params.id
                    }
                }

            } else {

                config = {
                    meta: {
                        urlImage: dato.profile.image,
                        urlUser: 'api/users/' + req.params.id
                    }
                }
            }  
            

            res.json(config)
        })

    }
}
module.exports= usersControllers