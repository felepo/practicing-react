import React, { useState, useEffect } from 'react';

const SearchPosts = () => {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [query]);

  return (
    <>
      <h1>Post list</h1>
      <input 
        type="text" 
        placeholder="Search posts by title..." 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      <div>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
} 
export default SearchPosts;