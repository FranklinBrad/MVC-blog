const router = require('express').Router()

// import all api route files here
const userApiRoutes = require('./user.api.routes')
const postApiRoutes = require('./post.api.routes')

// import all html files route files here
// const userHtmlRoutes = require('../html/user.html.routes')

// Add api routes to the router
router.use('/user', userApiRoutes);

router.use('/post', postApiRoutes);
// Add html routes to the router
// router.use('/user', userHtmlRoutes);

module.exports = router;