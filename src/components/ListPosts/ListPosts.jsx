import { useState, useEffect } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import BlogPost from '../BlogPost/BlogPost';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
    {posts.length > 0 && posts.map(posts => (
      <BlogPost {...posts}/>
    ))}
    </>
  );
}