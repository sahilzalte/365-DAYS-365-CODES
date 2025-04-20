import React from 'react';
import PostCards from './components/PostCards'; // Make sure path is correct

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Posts</h1>
      <PostCards />
    </div>
  );
}

export default App;
