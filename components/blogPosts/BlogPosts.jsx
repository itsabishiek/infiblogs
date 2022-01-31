import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const BlogPosts = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <Link href={`/post/${post.slug}`}>
          <Image
            src={post.featuredImage.url}
            alt=""
            height={250}
            width={380}
            objectFit="cover"
            className="blog-img"
          />
        </Link>
      </div>

      <Link href={`/post/${post.slug}`}>
        <h1 className="blog-card-title">{post.title}</h1>
      </Link>

      <p className="blog-card-desc">{post.description}</p>

      <div className="blog-info">
        <div className="blog-author">
          <Image
            src={post.author.photo.url}
            alt=""
            height={40}
            width={40}
            objectFit="cover"
            className="blog-author-img"
          />
          <p className="blog-author-name">{post.author.name}</p>
        </div>
        <div className="blog-date">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
