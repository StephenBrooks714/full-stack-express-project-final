const HomeFeaturesDB = require("../models/Features");
const HomeProjectsDb = require("../models/Projects");
const HomeBlogPostDB = require("../models/BlogPost");
module.exports = async (req, res) => {
    const features = await HomeFeaturesDB.find({}).sort({_id: -1}).populate('userid');
    const projects = await HomeProjectsDb.find({}).sort({_id: -1}).populate('userid');
    const blogs = await HomeBlogPostDB.find({}).sort({_id: -1}).populate('userid');
    res.render("index", {
        title: "Web Express I.T. Agency Home Page",
        features, projects, blogs
    })
}