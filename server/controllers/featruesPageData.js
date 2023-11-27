const FeaturesDB = require("../models/Features");

module.exports = async (req, res) => {
    const features = await FeaturesDB.find({}).sort({_id: -1}).populate('userid');
    res.render("features", {
        title: "Our features and services page.",
        features
    })
}