const express = require("express");
const router = express.Router();
const cache = require("../config/mcache");

const homeController = require("../controllers/homePageView");
const contactController = require("../controllers/contactPageView");
const sendFormController = require("../controllers/sendContactForm");
// blogs
const newPostController = require("../controllers/newPostData");
const storePostController = require("../controllers/storePostData");
const blogsController = require("../controllers/blogsPageView");
const postController = require("../controllers/postData");
const deletePostController = require("../controllers/deletePost");
// feature
const newFeatureController = require("../controllers/newFeaturePage");
const storeFeatureController = require("../controllers/storeFeaturePost");
const featuresController = require("../controllers/featruesPageData");
const featureController = require("../controllers/featurePagePost");
const deleteFeatureController = require("../controllers/deleteFeaturePost");
// projects
const newProjectController = require("../controllers/newProjectPage");
const storeProjectController = require("../controllers/storeProjectAction");
const projectsController = require("../controllers/projectsPage");
const projectController = require("../controllers/projectData");
const deleteProjectController = require("../controllers/deleteProjectDB");
// users
const newUserController = require("../controllers/registerPage");
const storeUserController = require("../controllers/storeUserAction");
const loginController = require("../controllers/loginPage");
const loginUserController = require("../controllers/loginUserAction");
const logoutUserController = require("../controllers/logoutUserAction");

const authUser = require("../middleware/ifAuthorized");
const ifLoggedIn = require("../middleware/ifLoggeedInAlready");
const blogCheck = require("../middleware/validateBlogForm");
const featureCheck = require("../middleware/validateFeaturesForm");
const projCheck = require("../middleware/validateProjectForm");

router.get("/", cache(2), homeController);
router.get("/contact", contactController);
router.post("/send/form", sendFormController);
// users
router.get("/register", ifLoggedIn, newUserController);
router.post("/store/user", storeUserController);
router.get("/login", ifLoggedIn, loginController);
router.post("/login/user", loginUserController);
router.get("/logout", logoutUserController);
// blogs
router.get("/newPost", authUser, newPostController);
router.post("/store/post", blogCheck, authUser, storePostController);
router.get("/blogs", cache(2), blogsController);
router.get("/post/:id", cache(2), postController);
router.get("/delete/post/:id", authUser, deletePostController);
// features
router.get("/newFeature", authUser, newFeatureController);
router.post("/store/feature", featureCheck, authUser, storeFeatureController);
router.get("/features", cache(2), featuresController);
router.get("/feature/:id", cache(2), featureController);
router.get("/delete/feature/:id", authUser, deleteFeatureController);
// projects
router.get("/newProject", authUser, newProjectController);
router.post("/store/project", authUser, storeProjectController);
router.get("/projects", cache(2), projectsController);
router.get("/project/:id", cache(2), projectController);
router.get("/delete/project/:id", authUser, deleteProjectController);

module.exports = router;