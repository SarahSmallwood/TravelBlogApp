export default function BlogPost() {
    constructor(props)
        super(props)

        this.state = {
            singlePost: {},
            error: {
                message: '',
                code: ''
            },
            isloading: false,
        }
    }
  
   componentDidMount()

        this.setState(pre => ({
            isloading: true
        }))
        let id = this.props.match.params.id
        Axios.get('/posts/' + id).then(res => {
            this.setState({ ...this.state.singlePost, singlePost: res.data, isloading: false });
        }).then(data => {
            this.setState({ ...this.state.singlePost, user: data.data.profile, isloading: false });
        }).catch(e => {      
        })

  
  
    deletePost = (id) => {
        this.setState(pre => ({
            isloading: true
        }))
        Axios.delete("/posts/" + id).then(data => {
            this.setState(pre => ({
                isloading: false
            }))
            this.props.history.push('/mypost')
        }).catch(e => {
       })
    }


        //            //DELETE  button TO DELETE POST
        //             <button type="button" className="btn btn-danger" onClick={() => this.deletePost(post1._id)}>Delete </button>
                    
        //           //POST DETAIL VIEW IN CARD
        //              <h2>{post1.title}</h2>
        //         <div className="SingleBlog_avatar">
        //             <Link to={"/public/" + user?.username} rel="noopener noreferrer" >
        //                 <img src={user?.imagePath ? user.imagePath : avtar} alt="img" width="75" height="75" />
        //             </Link>

        //             <Link to={"/public/" + user?.username} rel="noopener noreferrer" >
        //                 <p>{user?.username}</p>
        //             </Link>
        //             <p>{moment(post1.postDate).format("MMM DD, YYYY hh:mm")}</p>
        //         </div>
        //         <div className="singlePost_content pt-3">
        //             <img src={post1.imagePath} className="img-fluid" alt="prof" />
        //             <div className="text pt-3">
        //                 <p>{post1.content}</p>
        //             </div>
        //         </div>
        //    )

