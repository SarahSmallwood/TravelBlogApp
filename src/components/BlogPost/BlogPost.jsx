import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext();
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return '';

  return (
    <div>
      <h1>{postInfo.title}</h1>
      <div className="author">{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div>
          <Link to={`/edit/${postInfo._id}`}>
            Edit this post
          </Link>
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:3000/${postInfo.image}`} alt=""/>
      </div>
      <div>{postInfo.text}</div>
    </div>
  );
}

