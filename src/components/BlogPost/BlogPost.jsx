import {useContext, useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate} from "react-router-dom";


import axios from "axios";

export default function BlogPost() {
  // const {id: postId} = useParams();
  const [post, setPost] = useState('');
  const [id, setId] = useState('');
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [text,setText] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {

      const {data} = await axios.get(`/api/posts/showPost/${location.state.id}`);
      setPost(data);
      setId(data._id)
      setTitle(data.title)
      setText(data.text)
      setAuthor(data.author)
    }
    fetchData();
  },[])
    
    // Delete the post and redirect the user to the homepage
    const editPost = async (e) => {
      e.preventDefault();
      const data = {
          id: id,
          author: author,
          title: title,
          text: text
      }
      await axios.put(`/api/posts/editPost`, data);
      console.log()
    }
    const deletePosts = async (id) => {
      console.log(`Delete post with id: ${id}`)
      await axios.delete(`/api/posts/deletePosts/${id}`);
      navigate(`/viewall`);
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
    
    <button 
    className="delete"
    onClick={ () => {deletePosts(id)}}
    >
      Delete Post
      </button>
    </>
  );
}

