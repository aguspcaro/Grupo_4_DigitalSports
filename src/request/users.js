let axios = require('axios');
let defaults = require('./defaults')

const url = 'users/'

let userResource = {

    users: function(){
        return axios({
            ...defaults,
            method: "GET",
            url: url,
            params: {
                api_key: "random"
            }

        })

    },
    user: function(id){
        return axios({
            ...defaults,
            method: "GET",
            url: url + id,
            params: {
                api_key: "random"
            }
        })
    }



};

module.exports = userResource;