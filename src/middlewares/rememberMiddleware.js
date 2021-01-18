
function recordameMiddlware(req, res, next){

        if (req.cookies.recordame != undefined && req.session.user == undefined){
            req.session.user = req.cookies.recordame;
    
        }
       
        next();
    }
    
    module.exports = recordameMiddlware;