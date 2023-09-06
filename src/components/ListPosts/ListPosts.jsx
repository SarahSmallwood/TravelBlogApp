import BlogPost from '../../components/BlogPost/BlogPost';
import {useEffect, useState} from "react";

export default function ListPosts() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <BlogPost {...post} />
      ))}
    </>
  );
}



