import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  // console.log(author);

  return (
    <div className="author">
      <div className="author-img-container">
        <Image
          className="author-img"
          src={author.photo.url}
          alt=""
          height={100}
          width={100}
          objectFit="cover"
        />
      </div>
      <h3 className="author-name">{author.name}</h3>
      <p className="author-bio">{author.bio}</p>
    </div>
  );
};

export default Author;
