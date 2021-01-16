
function recordameMiddlware(req, res, next){

    console.log(req.session.color)
        if (req.cookies.user != undefined && req.session.color == undefined){
            req.session.user = req.cookies.recordame;
    
        }
       
        next();
    }
    
    module.exports = recordameMiddlware;