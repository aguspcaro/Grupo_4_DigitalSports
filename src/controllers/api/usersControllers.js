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

    }
}
module.exports= usersControllers