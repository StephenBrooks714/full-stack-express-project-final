module.exports = (req,res,next) =>{
    if(req.body == null){
        return res.redirect('/newFeature')
    }
    next()
}