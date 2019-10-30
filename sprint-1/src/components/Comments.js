import React from "react";
// index is just the i
export default function Comments(props) {
  const commentSection = props.commentsInfo.map(comments => {
    return (
      <div>
        <div>
          <div className="comment-name">{comments.name}</div>
          <div className="comment-date">{comments.date}</div>
        </div>
        <div className="comment-text">{comments.comment}</div>
      </div>
    );
  });

  return <section className="comment-section">{commentSection}</section>;
}
