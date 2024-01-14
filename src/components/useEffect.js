import React from 'react'

function useEffect() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Function to fetch data from the API
      const fetchPosts = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the function when the component mounts
      fetchPosts();
    }, []); // Empty dependency array means this effect runs once after the initial render
  
    return (
      <div>
        <h1>Post List</h1>
        <ul>
          {posts.map((post) => (
        <>
         <li key={post.id}>userId: {post.userId}</li>
            <li  key={post.id}>Title: {post.title}</li>
            <li key={post.id}>Post: {post.body}</li>
            <br />
        </>
           
          ))}
        </ul>
      </div>
    );
}

export default useEffect
