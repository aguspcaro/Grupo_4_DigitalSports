
function userLogueadoMiddleware(req, res, next){

    
    if (req.cookies.user != undefined && req.session.color == undefined){
            req.session.user = req.cookies.recordame;
    
        }
    
        next();
    }
    
    module.exports = userLogueadoMiddleware;