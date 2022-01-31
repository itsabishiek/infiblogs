import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import FeaturedPostCard from "../../components/featuredPostCard/FeaturedPostCard";
import { getFeaturedPosts } from "../../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
    });
  }, []);

  // console.log(featuredPosts);

  const customLeftArrow = (
    <div className="custom-left-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="custom-right-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div className="featured-posts">
      {featuredPosts.map((post, index) => (
        <FeaturedPostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default FeaturedPosts;
