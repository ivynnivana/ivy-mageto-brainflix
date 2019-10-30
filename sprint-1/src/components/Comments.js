import React from "react";

export default function Comments(props) {
  //   props.commentsInfo.map(commentsInfo => {
  return (
    <div>
      {props.commentsInfo.name}
      {props.commentsInfo.comment}
      {props.commentsInfo.date}
    </div>
  );
}
