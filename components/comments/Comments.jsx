import moment from "moment";
import React, { useEffect, useState } from "react";
import { getComments } from "../../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => {
      setComments(res);
    });
  }, []);

  // console.log(comments);

  return (
    <div className="comments">
      <h3>Comments</h3>

      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <h4>{comment.comment}</h4>
          <div className="comment-info">
            <h5>{comment.name}</h5>
            <p>{moment(comment.createdAt).format("MMM DD, YYYY")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
