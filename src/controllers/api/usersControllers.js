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
                    url: "/api/users"

                },
                body: datoNuevo
                    
            }

            res.json(config)

        })

        .catch(errno => {console.log(errno);})

    }
}
module.exports= usersControllers