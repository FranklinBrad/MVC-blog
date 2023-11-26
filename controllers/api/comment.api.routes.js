const router = require('express').Router();
const Comment = require('../../models');




router.post('/', async (req, res) => {
    try{
     const payload = await Comment.create({...req.body, user_id:req.session.user_id});

     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 module.exports = router