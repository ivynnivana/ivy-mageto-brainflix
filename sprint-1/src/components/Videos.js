import React from "react";

export default function Videos(props) {
  const videoSection = props.videoInfo.map(vids => {
    return (
      <div>
        <div className="video-container">
          <img className="video-element" src={vids.video} />
          <div className="text-container">
            <div className="video-text">{vids.text}</div>
            <div className="video-writer">{vids.writer}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="video-section">
      <div>
        <p className="video-title">NEXT VIDEO</p>
      </div>
      {videoSection}
    </section>
  );
}
