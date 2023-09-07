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
    
    // Delete the post and redirect the user to the homepage
    const editPost = async () => {
      await axios.edit(`/api/posts/editPost`);
    }
    const deletePosts = async () => {
      await axios.delete(`/api/posts/deletePosts`);
    }
  
  return (
    <form className="form" onSubmit={editPost}>
    <input type="title"
           placeholder={'Title'}
           value={title}
           onChange={e => setTitle(e.target.value)} />
    <input type="author"
           placeholder={'Author'}
           value={author}
           onChange={e => setAuthor(e.target.value)} />
    <input className="text" type="text"
           placeholder={'Text'}
           value={text}
           onChange={e => setText(e.target.value)} />
    <input type="file"
           onChange={e => setImage(e.target.files)} />
           {/* <button className="file" onClick={handleUpload}>Upload</button>  */}
           <img src={`/Images` +image} alt=''/>
    <button className="submit">Update Post</button>
    <button className="delete">Delete Post</button>
  </form>
  );
}

