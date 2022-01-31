import React, { useState, useRef, useEffect } from "react";
import { submitComment } from "../../services";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
      }, 5000);
    });
  };

  // console.log(slug);

  return (
    <div className="comment-form">
      <h3>Leave a Comment</h3>

      <div className="comment-textarea">
        <textarea
          ref={commentEl}
          name="comment"
          placeholder="Write Your Comment Here..."
        />
      </div>

      <div className="comment-input">
        <input ref={nameEl} type="text" name="name" placeholder="Name" />
        <input ref={emailEl} type="email" name="email" placeholder="Email" />
      </div>

      <div className="comment-checkbox">
        <input
          ref={storeDataEl}
          type="checkbox"
          id="storeData"
          name="storeData"
          value="true"
        />
        <label htmlFor="storeData">
          Save my Name, Email in this browser for the next time I comment.
        </label>
      </div>

      {error && (
        <p style={{ margin: "5px 0", color: "red" }}>
          All fields are mandatory.
        </p>
      )}

      <div className="comment-btn">
        <button onClick={handleSubmit} type="button">
          Post Comment
        </button>

        {showSuccessMsg && (
          <span style={{ color: "var(--primary-color)", marginTop: 10 }}>
            Comment submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
