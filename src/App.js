import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Posts } from './components/Posts';
import PaginationJs from './components/Pagination';
import PagesButtonGroup from './components/postsPerPageButtons';



function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(15);
  const [postsPerPage] = useState(15);


  useEffect(() => {
    const fechPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fechPosts()
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change view
  const paginateMethod = (event, value) => setCurrentPage(value);
  const changeItemsMethod = number => console.log('this is  ' + number);


  return (
    <>
      <Posts posts={currentPosts} loading={loading} />
      <PaginationJs postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginateMethod} />
      <PagesButtonGroup changeItems={changeItemsMethod} />
    </>
  );
}

export default App;
