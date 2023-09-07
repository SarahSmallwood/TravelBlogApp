import {useState, useEffect} from "react";
import axios from 'axios';
import * as FormData from "form-data";
import styles from './CreatePost.modules.css';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [text,setText] = useState('');
  const [image, setImage] = useState();
//   const handleUpload = (e) => {
//        const headers = {
//               'Content-Type': 'multipart/form-data'
//             }
//        const formdata = new FormData()
//        formdata.append('file', file)
//        axios.post('/api/posts/upload', formdata, {
//               headers: headers,
//               body: formdata
//             })
//        .then(res => setFile(res.data[0].file))
//        .catch(err => console.log(err))
//   }
//   useEffect(() => {
//     axios.get('/api/posts/getImage')
//     .then(res => setImage(res.data[0].image))
//     .catch(err => console.log(err))
//   }, [])
  
  async function createPost(e) {
    e.preventDefault();
    const data = {
        author: author,
        title: title,
        text: text,
        image: image,
    }
    console.log("test", data)

    const response = axios.post("/api/posts/createpost", data)
} 
  return (
    <form className="form" onSubmit={createPost}>
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
      <button className="submit">Publish Post</button>
    </form>
  )};
