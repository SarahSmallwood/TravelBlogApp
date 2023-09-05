//FULL CRUD OPERATIONS HERE

//Create, Read, Update, Delete

//CREATE 


router.post("",(req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })
    post.save().
        then(post => {
            if(post){
                res.status(201).json({
                    message: "Post added to Blog",
                    post: {
                        ...post,
                        id: post._id
                    }
                })
            }
    }).catch(e => {
            console.log(e)
        })
})

// READ 
router.get("/myblogpost", (req, res, next) => {
Post.find({creator: req.userData.userId}).then(post => {
  if (post) {
    res.status(200).json({
        message: "Blog Post found!",
        posts: post
    });
  }
}).catch(e=>{
    console.log(e)
});
});

//UPDATE 
router.put(
"/:id",
(req, res, next) => {
    const post = new Post({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content,
     
    });
    Post.updateOne(
        { _id: req.params.id},
        post
      ).then(result => {
        if(result){
            //action completed
            res.status(200).json({ message: "Update posted!" });
        }       
        else {
            //error message
            res.status(500).json({ message: "Error!!" });
        }
    });
}
);


//DELETE 
router.delete("/:id", (req, res, next) => {
Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(
  result => {
    console.log(result);
    if (result.n > 0) {
        //successful operation
      res.status(200).json({ message: "Deleted!" });
    } else {
        //error message
        return res.status(401).json({ message: "Not authorized!!" });
    }
  }
);
});
