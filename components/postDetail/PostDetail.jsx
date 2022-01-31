import React from "react";
import Image from "next/image";
import MediaQuery from "react-responsive";
import moment from "moment";

const PostDetail = ({ post }) => {
  // console.log(post);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );

      case "paragraph":
        return (
          <p
            key={index}
            style={{
              color: "var(--text-secondary)",
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case "heading-four":
        return (
          <h4 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );

      case "image":
        return (
          <Image
            key={index}
            src={obj.src}
            alt=""
            height={obj.height}
            width={obj.width}
          />
        );

      case "bulleted-list":
        return (
          <ul key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </ul>
        );

      default:
        return modifiedText;
    }
  };

  return (
    <div className="post-detail">
      <div className="post-detail-img-wrapper display-none">
        <Image
          className="post-detail-img"
          src={post.featuredImage.url}
          alt=""
          height="50%"
          width="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div>
        <MediaQuery maxWidth={768}>
          <div className="post-detail-img-wrapper">
            <Image
              className="post-detail-img"
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

      <div className="post-detail-info">
        <div className="post-detail-author">
          <div className="display-none">
            <Image
              className="post-detail-author-img"
              src={post.author.photo.url}
              alt=""
              height={50}
              width={50}
              objectFit="cover"
            />
          </div>

          <MediaQuery maxWidth={768}>
            <Image
              className="post-detail-author-img"
              src={post.author.photo.url}
              alt=""
              height={40}
              width={40}
              objectFit="cover"
            />
          </MediaQuery>

          <div className="post-detail-author-name">{post.author.name}</div>
        </div>

        <div className="post-detail-date">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </div>
      </div>

      <h1 className="post-detail-title">{post.title}</h1>

      {/* {console.log(post.content.raw)} */}

      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(itemIndex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default PostDetail;
