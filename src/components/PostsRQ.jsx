import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function PostsRQ() {
  const res = useQuery("posts", () =>
    axios.get("/posts").then((res) => res.data)
  );
  const renderContent = () => {
    if (res.isLoading) {
      console.log("loading ...");
      return <h3>Loading ...</h3>;
    } else if (res.isError) {
      console.log("Error ...");
      return <h3>Error - {res.error}</h3>;
    } else {
      console.log("Rendering ..");
      return res.data?.map((post, index) => {
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

export default PostsRQ;
