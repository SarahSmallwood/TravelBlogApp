import {useContext, useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';


import axios from "axios";

export default function BlogPost() {
  // const {id: postId} = useParams();
  const [post, setPost] = useState('');
  const [id, setId] = useState('');
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [text,setText] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {

      console.log(`BlogPost with id: ${location}`)

      const defaultId = "64f92e71f916fff80d61f0ae"

      const {data} = await axios.get(`/api/posts/showPost/${defaultId}`);
      setPost(data);
      setTitle(data.title)
      setText(data.text)
      setAuthor(data.author)
    }
    fetchData();
  },[])
    
    // Delete the post and redirect the user to the homepage
    const editPost = async () => {
      // await axios.edit(`/api/posts/editPost`);
      console.log()
    }
    const deletePosts = async (id) => {
      console.log(`Delete post with id: ${id}`)
      // await axios.delete(`/api/posts/deletePosts/${id}`);
    }
  
  return (
    <>
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
      <button className="submit">Publish Post</button>
    </form>
    {/* <h1>{post.title}</h1>
    <div>{post.author}</div>
    <div>{post.text}</div>
    <button className="submit">Update Post</button> */}

    <button 
    className="delete"
    onClick={ () => {deletePosts("asd")}}
    >
      Delete Post
      </button>
    </>
  );
}

