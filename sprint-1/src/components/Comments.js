import React from "react";
// index is just the i
export default function Comments(props) {
  const commentSection = props.commentsInfo.map(comments => {
    return (
      <div>
        <div>
          <div>{comments.name}</div>
          <div>{comments.date}</div>
        </div>
        <div>{comments.comment}</div>
      </div>
    );
  });

  return <section>{commentSection}</section>;
}
