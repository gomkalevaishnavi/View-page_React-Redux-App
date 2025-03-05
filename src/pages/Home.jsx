import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load posts.</p>;

  return (
    <div className="container">
      <h1>Social Media App</h1>
      <div className="grid-container">
        {items.map((post) => (
          <div key={post.id} className="card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
            <div className="card-content">
              <p><strong>User ID:</strong> {post.userId}</p>
              <h3><strong>Title:</strong>{post.title.slice(0, 15)}...</h3>
              <p><strong>Body:</strong> {post.body.slice(0, 50)}... <Link to={`/item/${post.id}`}>Read More</Link></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
