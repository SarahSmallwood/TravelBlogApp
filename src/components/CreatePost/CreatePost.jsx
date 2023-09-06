import {useState, useNavigate} from "react";
import axios from 'axios';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [text,setText] = useState('');
  const [image, setImage] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  async function createNewPost(e) {
    e.preventDefault();
    const data = {
        author: author,
        title: title,
        text: text,
        image: image,
    }
    console.log("test", data)
    const response = await axios.post("/api/posts/createpost", data)
    
}
    
  return (
    <form onSubmit={createNewPost}>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={e => setTitle(e.target.value)} />
      <input type="author"
             placeholder={'Author'}
             value={author}
             onChange={e => setAuthor(e.target.value)} />
      <input type="text"
             placeholder={'Text'}
             value={text}
             onChange={e => setText(e.target.value)} />
      <input type="image"
             onChange={e => setImage(e.target.image[0])} />
      <button>Publish Post</button>
    </form>
  )};
