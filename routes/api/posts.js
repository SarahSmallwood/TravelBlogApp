//FULL CRUD OPERATIONS HERE
const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/posts');

//Create, Read, Update, Delete

//CREATE 
// GET /api/posts
router.get('/', postCtrl.index);
// GET /api/posts
router.get('/showPost/:id', postCtrl.showPost);

router.post("/createpost", postCtrl.createPost);

router.put("/editPost", postCtrl.editPost);

router.put("/deletePosts/:id", postCtrl.deletePosts);

router.get("/showAll", postCtrl.showAll);
    
module.exports = router