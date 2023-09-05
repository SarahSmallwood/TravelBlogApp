import {useState} from "react";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [text,setText] = useState('');
  const [image, setImage] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  async function createNewPost(e) {
    const data = new FormData();
    data.set('title', title);
    data.set('author', author);
    data.set('text', text);
    data.set('image', image[0]);
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
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
             onChange={e => setImage(e.target.image)} />
      <Editor value={content} onChange={setContent} />
      <button>Create post</button>
    </form>
  );
}