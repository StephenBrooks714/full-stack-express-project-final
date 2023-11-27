const StoreFeature = require("../models/Features");
const path = require("path");

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', '..', 'public/uploads', image.name), async (error) => {
        await StoreFeature.create({
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
        console.log(error);
        res.redirect('/features')
    })
}