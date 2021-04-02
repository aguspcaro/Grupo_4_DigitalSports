let fs = require('fs')
let path = require('path')
let db = require('../../database/models')
const { get } = require('../../routes/main')
//let userSuscribe = path.resolve('database', 'suscribe.json')
//let user = fs.readFileSync(userSuscribe, {encoding: 'utf-8'})
//console.log(user)

let usersControllers =  {

    list: function(req, res) {

        db.User.findAll({
            include: [{association: "profile"}]
        })
            
        .then(dato => {

            let config = {
                method: "GET",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: dato
                    
            }

            res.json(config)

        })

        .catch(errno => {console.log(errno);})

    },












 // FORMULARIO DE SUSCRIPCION
    suscribe: function (req, res) {
    /*  let respuesta = {
            meta: {
                url: "api/users",
                count: users.length,
                status:200
            },
            data: users
        }

        res.json(respuesta)
    */
    },
    suscribe_post: function (req, res) {
    /*  users.push(req.body.mailSuscribe); */
        
    }
}
module.exports= usersControllers