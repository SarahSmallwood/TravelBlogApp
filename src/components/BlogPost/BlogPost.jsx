import {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function BlogPost() {
  const [post, setPost] = useState('');
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [text,setText] = useState('');
  const [image, setImage] = useState();
    // Fetch the single blog post
    useEffect(() => {
      fetch('/posts/'+id)
        .then(response => {
          response.json().then(postInfo => {
            setTitle(postInfo.title);
            setContent(postInfo.content);
            setSummary(postInfo.summary);
          });
        });
    }, []);
    // Delete the post and redirect the user to the homepage
    const editPost = async () => {
      await axios.edit(`/api/posts/editPost`);
    }
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

