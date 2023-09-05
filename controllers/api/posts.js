// const Posts = require('../../models/Posts')

// module.exports = {
//     index,
//     show,
// };

// async function index(req, res) {
//     try {
//       const items = await Posts.find({}).sort('name').populate('category').exec();
//       // re-sort based upon the sortOrder of the categories
//       posts.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//       res.status(200).json(posts);
//     } catch (e) {
//       res.status(400).json({ msg: e.message });
//     }
//   }
  
//   async function show(req, res) {
//       try{
//         const posts = await Posts.findById(req.params.id);
//         res.status(200).json(posts);
//       }catch(e){
//         res.status(400).json({ msg: e.message });
//       }  
//     }
