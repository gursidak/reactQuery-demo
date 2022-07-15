import axios from "axios";
import React, { useEffect, useState } from "react";

function Posts() {
  const fetchPosts = async () => {
    const res = await axios.get("/posts");
    setData(res.data);
    setLoading(false);
  };
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      console.log("loading ...");
      return <h3>Loading ...</h3>;
    } else {
      console.log("Rendering ..");
      return data?.map((post, index) => {
        return (
          <li className="post" key={index}>
            {post.title}
          </li>
        );
      });
    }
  };

  return (
    <div>
      <ul>{renderContent()}</ul>
    </div>
  );
}

export default Posts;
