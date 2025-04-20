import React, { useEffect, useState } from 'react';

const PostCards = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetching data from the API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={containerStyle}>
            {posts.map((post) => (
                <div key={post.id} style={cardStyle}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

// Inline styles
const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    background: '#f4f4f4',
};

const cardStyle = {
    background: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: '300px',
};

export default PostCards;
