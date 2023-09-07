import axios from "axios";
import {useEffect, useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './ListPosts.modules.css';
import BlogPost from "../BlogPost/BlogPost";
import { useNavigate} from "react-router-dom";

export default function ListPosts() {

  const navigate = useNavigate();

  const onClickGoToPost = (id) => {
    console.log(`onclick ${id}`)
    navigate(`/blogpostpage`, {state:{id: id,}});
  }

  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    // Call the server to fetch the posts and store them into the state
    async function fetchData() {
      const { data } = await axios.get('/api/posts/showAll');
      setPosts(data);
    }
    fetchData();
  }, []);
  return(
    <>
    <ListGroup className="list">{
      posts.map((post) => {
        // Map the posts to JSX
        return (
          <ListGroup.Item key={post._id} className="post"> 
            <div className="title">
              {post.title}
              <button
              className="postButton"
              onClick={ () => { onClickGoToPost(post._id) } }
              >
                Go to Post
                </button>
            </div>
            <div className="author">{post.author}</div>
            {/* <div className="image">{post.image}</div> */}
            <div className="text">{post.text}</div>
          </ListGroup.Item>
        );
      })
    }
  </ListGroup>
  </>
  )
};
  