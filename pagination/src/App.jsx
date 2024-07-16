import { useEffect, useState } from "react";
import Post from "./component/Post";
import Pagination from "./component/Pagination";
import "./App.css";
function App() {
  const [posts, setPosts] = useState([]); // Data fetching
  const [loading, setLoading] = useState(false); // loading state
  const [currentPage, setCurrentPage] = useState(1); // starting page number
  const [postsPerPge] = useState(10); // show data per page

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPge; // 1 * 10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPge; // 10 - 10 = 0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 0, 10

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber); // 1,2,3,4,5,6,7,8,9,10 passes from where method is called
  };

  return (
    <div className="container">
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        length={posts.length}
        postsPerPage={postsPerPge}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
