const router = require('express').Router();
 const { Post, User } = require('../models');
// const withAuth = require('../utils/auth');

// // -------------------------------------------------------------------
// // Sends user to login / landing screen
// // -------------------------------------------------------------------
 router.get('/', async (req, res) => {
  try {
   res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
 });

 router.get('/login', async (req, res) => {
  try {
   res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
 });
 router.get('/dashboard', async (req, res) => {
  try {
   res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
 });
 router.get('/signup', async (req, res) => {
  try {
   res.render('create');
  } catch (err) {
    res.status(500).json(err);
  }
 });
 router.get('/logout', async (req, res) => {
  try {
   res.render('logout');
  } catch (err) {
    res.status(500).json(err);
  }
 });
 

// // -------------------------------------------------------------------
// // Sends user to loadout build screen
// // -------------------------------------------------------------------
// router.get('/loadout', async (req, res) => {
//    try {
// //     if (req.session.logged_in ){
// //       res.render('loadout')
// //     } else {
// //       res.redirect('/')
// //     }
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });


module.exports = router;