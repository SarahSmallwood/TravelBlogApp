import {useState} from 'react';

export default function CreatePost() {
    const [title, setTitle]=useState('');
    const [text, setText]=useState('');
    const [image, setImage]=useState('');
    const [redirect, setRedirect] =useState('');
    async function createNewPost(e) {
        const data = new FormData();
        data.set('title', title);
        data.set('text', text);
        data.set('image', image[0]);
        e.preventDefault();
        const response = await fetch('http://localhost:3000/post', {
            method: 'POST',
            body: data,
        });
        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Link to={'/'} />
    }

    return (
      <form onSubmit={createNewPost}>
        <input type="title" placeholder={'Title'} value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="text" placeholder={'Text'} value={text} onChange={e => setText(e.target.value)}/>
        <input type="image" value={image} onChange={e => setImage(e.target.image)}/>
        <button>Create New Blog</button>
      </form>
    );
  }

