import axios from "axios";
import {useEffect, useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function ListPosts() {
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
    <ListGroup>{
      posts.map((post) => {
        // Map the posts to JSX
        return (
          <ListGroup.Item key={post._id}> 
            <div>{post.title}</div>
            <div>{post.author}</div>
            <div>{post.image}</div>
            <div>{post.text}</div>
          </ListGroup.Item>
        );
      })
    }
  </ListGroup>
  )
};
  