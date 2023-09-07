const Posts = require('../../models/Posts')

const path = require('path');
const multer  = require('multer')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/Images')
//   }, 
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + "_" + Date.now() +  path.extname(file.originalname))
//     }
  
// })

//Create
const createPost = async (req, res) => {
  try {
    console.log('test', req.body)
    const posts = await Posts.create(req.body);
    res.status(200).json(data);
  }catch (e) {
    res.status(400).json({ msg: e.message });
  }

}
//Delete
const deletePosts = async (req, res) => {
  try {
    console.log('test', req.body)
    const data = await Posts.delete(req.body)
    res.status(200).json(data);
  }catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
// Index
async function index(req, res) {
    try {
      const data = await Posts.find({}).sort('name').populate('category').exec();
      // re-sort based upon the sortOrder of the categories
      data.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
      res.status(200).json(posts);
    } catch (e) {
      res.status(400).json({msg: e.message});
    }
  }
  //Show
  async function show(req, res) {
      try{
        const posts = await Posts.findById(req.params.id);
        res.status(200).json(posts);
      }catch(e){
        res.status(400).json({ msg: e.message });
      }  
    }
  //Update
  const editPost = async (req, res) => {
  try {
    console.log('test', req.body)
    const data = await Posts.findByIdandUpdate(req.body.id);
    res.status(200).json(data);
  }catch (e) {
    res.status(400).json({ msg: e.message });
  }

}
// Show All Posts
  const showAll = async (req, res) => {
    try {
      console.log('test', req.body)
      const data = await Posts.find(req.body)
      res.status(200).json(data);
    }catch (e) {
      res.status(400).json({ msg: e.message });
    }
  }
  //Upload
  // const upload = async (req, res) => {
  //   // console.log('Upload endpoint', req.body)

  //   const upload = multer({
  //     storage: storage
  //   })
    
  //   try {
  //     upload.single(req.file);
  //     // const data = await Posts.create(req.body)
  //     res.status(200).json(res.body);
  //   }catch (e) {
  //     res.status(400).json({ msg: e.message });
  //   }
  
  // }

    module.exports = {
      index,
      show,
      createPost,
      deletePosts,
      editPost,
      showAll
    };
