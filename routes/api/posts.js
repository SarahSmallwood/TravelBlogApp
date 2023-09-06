//FULL CRUD OPERATIONS HERE
const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/posts');

//Create, Read, Update, Delete

//CREATE 
// GET /api/items
router.get('/', postCtrl.index);
// GET /api/items/:id
router.get('/:id', postCtrl.show);

router.post("/createpost", postCtrl.createPost)

router.post("/editPost", postCtrl.editPost)

router.post("/deletePosts", postCtrl.deletePosts)

router.post("/showAll", postCtrl.showAll)
    
module.exports = router