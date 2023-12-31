const singleFeaturePost = require("../models/Features");

module.exports = async (req, res) => {
    const feature = await singleFeaturePost.findById(req.params.id).populate('userid');
    res.render("feature", {
        title: "More information about our service for you.",
        feature
    })
}