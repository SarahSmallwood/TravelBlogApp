import {useContext, useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";

export default function BlogPost() {
  const {id: postId} = useParams();
  const [post, setPost] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(`api/posts/${postId}`);
      setPost(data);
    }
    fetchData();
  },[postId])
    // Fetch the single blog post
    
    // Delete the post and redirect the user to the homepage
    const editPost = async () => {
      await axios.edit(`/api/posts/editPost/${postId}`);
      console.log()
    }
    const deletePosts = async () => {
      await axios.delete(`/api/posts/deletePosts/${postId}`);
    }
  
  return (
    <>
    <h1>{post.title}</h1>
    <div>{post.author}</div>
    <div>{post.text}</div>
    <button className="submit">Update Post</button>
    <button className="delete">Delete Post</button>
    </>
  );
}

