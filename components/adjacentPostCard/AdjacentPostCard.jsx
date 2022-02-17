import React from "react";
import moment from "moment";
import Link from "next/link";

const AdjacentPostCard = ({ post, position }) => {
  // console.log(post);

  return (
    <div className="adjacent-card">
      <div
        className="adjacent-img"
        style={{ backgroundImage: `url(${post.featuredImage.url})` }}
      ></div>
      <div className="featured-overlay"></div>
      <div className="adjacent-info">
        <p className="adjacent-date">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <h3 className="adjacent-title">{post.title}</h3>
      </div>

      <Link href={`/post/${post.slug}`}>
        <span className="adjacent-link"></span>
      </Link>

      {position === "LEFT" && (
        <Link href={`/post/${post.slug}`}>
          <div
            style={{
              position: "absolute",
              zIndex: 5,
              bottom: 20,
              left: 30,
              backgroundColor: "var(--primary-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: "50%",
              cursor: "pointer",
            }}
            className="move-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 24, height: 24, color: "#fff" }}
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
        </Link>
      )}

      {position === "RIGHT" && (
        <Link href={`/post/${post.slug}`}>
          <div
            style={{
              position: "absolute",
              zIndex: 5,
              bottom: 20,
              right: 30,
              backgroundColor: "var(--primary-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: "50%",
              cursor: "pointer",
            }}
            className="move-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 24, height: 24, color: "#fff" }}
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
        </Link>
      )}
    </div>
  );
};

export default AdjacentPostCard;
