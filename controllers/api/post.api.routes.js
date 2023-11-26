const router = require('express').Router();
const Post = require('../../models/Post');

router.get('/', async (req, res) => {
   try{
    const payload = await Post.findAll();
    res.status(201).json({status: ('succes'), payload})
   } catch (err){
    res.status(401).json({status: ('error'), payload: err.message})

   }
} )

router.get('/:id', async (req, res) => {
    try{
     const payload = await Post.findAll(req.params.id);
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 router.post('/', async (req, res) => {
    try{
     const payload = await Post.create({...req.body, user_id:req.session.user_id});

     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 router.put('/:id', async (req, res) => {
    try{
     const payload = await Post.update(
        req.body, {
          where: {
           id: req.params.id
          }
        }
     );
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 router.delete('/;id', async (req, res) => {
    try{
     const payload = await Post.destroy({
        where: {
            id:req.params.id

        }
    });
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 module.exports = router