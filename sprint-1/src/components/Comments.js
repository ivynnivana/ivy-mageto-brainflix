import React from "react";
// index is just the i
export default function Comments(props) {
  const commentSection = props.commentsInfo.map(comments => {
    return (
      <div className="comment-container">
        <button className="button"></button>
        <h4 className="comment-name">{comments.name}</h4>
        <h5 className="comment-date">{comments.date}</h5>
        <div className="comment-text">{comments.comment}</div>
      </div>
    );
  });

  return <section className="comment-section">{commentSection}</section>;
}
