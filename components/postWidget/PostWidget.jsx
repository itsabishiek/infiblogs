import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../../services";
import moment from "moment";
import { CalendarToday } from "@mui/icons-material";

const PostWidget = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) => {
        setRelatedPosts(result);
        console.log(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="post-widget">
      <h3>{slug ? "Related Posts" : "Recent Posts"}</h3>

      {relatedPosts.map((post, index) => (
        <div className="post-widget-container" key={index}>
          <div className="post-widget-top">
            <div>
              <Image
                className="post-widget-img"
                src={post.featuredImage.url}
                alt=""
                height="60%"
                width="100%"
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div className="post-widget-date">
              <CalendarToday />

              <p className="post-date">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>

          <div className="post-widget-bottom">
            <Link href={`/post/${post.slug}`} className="post-widget-title">
              <h4>{post.title}</h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
