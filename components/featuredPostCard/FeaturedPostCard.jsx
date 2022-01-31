import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const FeaturedPostCard = ({ post }) => {
  return (
    <div className="featured-post-card">
      <div
        className="featured-image"
        style={{ backgroundImage: `url("${post.featuredImage.url}")` }}
      ></div>
      <div className="featured-overlay"></div>

      <div className="featured-post-info">
        <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
        <h3>{post.title}</h3>
        <div className="featured-post-author">
          <Image
            className="featured-author-img"
            src={post.author.photo.url}
            alt=""
            height={35}
            width={35}
            objectFit="cover"
          />
          <p>{post.author.name}</p>
        </div>
      </div>

      <Link href={`/post/${post.slug}`}>
        <span className="featured-post-link"></span>
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
