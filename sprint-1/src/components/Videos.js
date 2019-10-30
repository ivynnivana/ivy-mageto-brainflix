import React from "react";

export default function Videos(props) {
  const videoSection = props.videoInfo.map(vids => {
    return (
      <div>
        <p className="video-title">NEXT VIDEO</p>
        <img className="video-container" src={vids.video} />
        <div className="video-text">{vids.text}</div>
        <div className="video-writer">{vids.writer}</div>
      </div>
    );
  });

  return <section className="video-section">{videoSection}</section>;
}
