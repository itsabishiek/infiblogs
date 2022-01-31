import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import MediaQuery from "react-responsive";

const PostCard = ({ post }) => {
  // console.log(post);

  return (
    <div className="post-card">
      <div className="post-card-img">
        <div className="img-container display-none">
          <Image
            src={post.featuredImage.url}
            alt=""
            width="100%"
            height="50%"
            layout="responsive"
            objectFit="cover"
            className="post-img"
            priority={true}
          />
        </div>
        <div>
          <MediaQuery maxWidth={768}>
            <div className="img-container">
              <Image
                className="post-img"
                priority={true}
                src={post.featuredImage.url}
                alt=""
                height="60%"
                width="100%"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </MediaQuery>
        </div>

        <div className="post-info">
          <div className="post-author">
            <Image
              src={post.author.photo.url}
              alt=""
              height={40}
              width={40}
              objectFit="cover"
              className="post-author-img"
            />
            <p className="post-author-name">{post.author.name}</p>
          </div>
          <div className="post-date">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </div>
        </div>
      </div>

      <Link href={`/post/${post.slug}`}>
        <h1 className="post-card-title">{post.title}</h1>
      </Link>

      <p className="post-card-desc">{post.description}</p>

      <Link href={`/post/${post.slug}`}>
        <button className="post-btn">Read more</button>
      </Link>
    </div>
  );
};

export default PostCard;
