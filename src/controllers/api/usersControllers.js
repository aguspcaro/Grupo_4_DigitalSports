let fs = require('fs')
let path = require('path')
let db = require('../../database/models')
const { get } = require('../../routes/main')
const bcrypt = require('bcryptjs');



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
                        urlImage: null
    
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
                        urlImage: "images/products/" + dato.profile.image
    
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

    },

    edit: function(req, res){


        db.User.findOne({where: {id: req.params.id}})   

        
        .then((user) => {

            if(user != undefined){

                db.User.update({
                    
                    email: req.body.email,
                    password: req.body.password

                },{where: 
                    {
                        id: req.params.id
                    }
                }
                
                )
                .then(dato => {

                    
                    let config = {
                        meta: {
                            status: 200,
                            url: "api/edit/" + req.params.id,

                                          
                            
                        },
                        body:{
                            email: "",
                            password: ""
                        }                      
                    }
        
                                                   
        
                    res.json(config)
                })

                .catch((error) => {

                    console.log(error)
                })


            }

        }).catch((error) => { console.log(error)})
    },

    create: function(req, res){

        db.User.create({

            email: req.body.email,
            password: req.body.password
        })

        .then((user) => {


            if(user != undefined) {

                let config = {
                    meta: {
                        status: 200,
                        url: "api/create/",                                     
                        
                    },
                    body:{
                        email: "",
                        password: ""
                    }                      
                }  
                                               
    
                res.json(config)


            }
        })
    }
}
module.exports= usersControllers