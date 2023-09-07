const Posts = require('../../models/Posts')

//Create
const createPost = async (req, res) => {
  try {
    console.log('test', req.body)
    const data = await Posts.create(req.body);
    res.status(200).json(data);
  }catch (e) {
    res.status(400).json({ msg: e.message });
  }

}
//Delete
const deletePosts = async (req, res) => {
  try {
    console.log('test', req.body)
    const data = await Posts.delete(req.params.id)
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
  //ShowPost
  async function showPost(req, res) {
      try{
        console.log("asdasd")
        const data = await Posts.findById(req.params.id);
        res.status(200).json(data);
      }catch(e){
        res.status(400).json({ msg: e.message });
      }  
    }
  //Update
  const editPost = async (req, res) => {
  try {
    console.log('test', req.body)
    const data = await Posts.findByIdandUpdate(req.body.id, req.body);
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

    module.exports = {
      index,
      showPost,
      createPost,
      deletePosts,
      editPost,
      showAll
    };
