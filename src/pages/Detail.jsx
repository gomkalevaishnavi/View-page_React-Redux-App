import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.items.find(p => p.id === parseInt(id)));

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="detail-container">
      <h1>Details Page For Post With ID {id}</h1>
      <div className="detail-card">
        <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
        <p><strong>User ID:</strong> {post.userId}</p>
        <h2><strong>Title:</strong> {post.title}</h2>
        <p><strong>Body:</strong> {post.body}</p>
      </div>
    </div>
  );
};

export default Detail;
