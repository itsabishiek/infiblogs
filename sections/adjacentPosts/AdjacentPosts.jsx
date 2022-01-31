import React, { useState, useEffect } from "react";
import AdjacentPostCard from "../../components/adjacentPostCard/AdjacentPostCard";
import { getAdjacentPosts } from "../../services";

const AdjacentPosts = ({ slug, createdAt }) => {
  const [adjacentPost, setAdjacentPost] = useState([]);

  useEffect(() => {
    getAdjacentPosts(slug, createdAt).then((res) => {
      setAdjacentPost(res);
    });
  }, [slug]);

  //   console.log(adjacentPost);

  return (
    <div>
      <>
        {adjacentPost.previous && (
          <div className="">
            <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
          </div>
        )}

        {adjacentPost.next && (
          <div className="">
            <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
          </div>
        )}
      </>
    </div>
  );
};

export default AdjacentPosts;
