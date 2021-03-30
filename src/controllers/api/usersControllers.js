let fs = require('fs')
let path = require('path')
let userSuscribe = path.resolve('database', 'suscribe.json')
console.log(userSuscribe)
let user = fs.readFileSync(userSuscribe, {encoding: 'utf-8'})
console.log(user)

let usersControllers =  {
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