import {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function BlogPost() {
    const [post, setPost] = useState({});
    // Fetch the single blog post
    useEffect(() => {
      async function fetchData() {
        const { data } = await axios.get(`/api/posts/${post}`);
        setPost(data.data.post);
      }
      fetchData();
    }, [post]);
    // Delete the post and redirect the user to the homepage
    const deletePosts = async () => {
      await axios.delete(`/api/posts/deletePosts`);
    }

  return (
    <div>
      <h1>{post.title}</h1>
      <div className="author">{post.author}</div>
      <div>{post.author}</div>(
        <div>
          <Link to={`/editPost/${post}`}>
            Edit this post
          </Link>
          <button onClick={deletePosts}> Delete Post </button>
        </div>
      )
      <div className="image">
        <img src={`api/post/${post.image}`} alt=""/>
      </div>
      <div>{post.text}</div>
    </div>
  );
}

