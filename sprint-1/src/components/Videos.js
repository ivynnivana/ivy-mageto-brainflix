import React from "react";

export default function Videos(props) {
  const videoSection = props.videoInfo.map(vids => {
    return (
      <div>
        <img src={vids.video} />
        <div>{vids.text}</div>
        <div>{vids.writer}</div>
      </div>
    );
  });

  return <section>{videoSection}</section>;
}
