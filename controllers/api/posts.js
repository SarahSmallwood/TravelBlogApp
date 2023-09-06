const Posts = require('../../models/Posts')

const createPost = async (req, res) => {
  try {
    console.log('test', req.body)
    const data = await Posts.create(req.body)
    res.status(200).json(data);
  }catch (e) {
    res.status(400).json({ msg: e.message });
  }

}

async function index(req, res) {
    try {
      const items = await Posts.find({}).sort('name').populate('category').exec();
      // re-sort based upon the sortOrder of the categories
      posts.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
      res.status(200).json(posts);
    } catch (e) {
      
    }
  }
  
  async function show(req, res) {
      try{
        const posts = await Posts.findById(req.params.id);
        res.status(200).json(posts);
      }catch(e){
        res.status(400).json({ msg: e.message });
      }  
    }
    module.exports = {
      index,
      show,
      createPost,
    };
