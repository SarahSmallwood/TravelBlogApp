//FULL CRUD OPERATIONS HERE
const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/posts');

//Create, Read, Update, Delete

//CREATE 
// GET /api/posts
router.get('/', postCtrl.index);
// GET /api/posts
router.get('/posts', postCtrl.show);

router.post("/createpost", postCtrl.createPost)

router.post("/editPost", postCtrl.editPost)

router.post("/deletePosts", postCtrl.deletePosts)

router.get("/showAll", postCtrl.showAll)

// router.post("/upload", postCtrl.upload)
    
module.exports = router