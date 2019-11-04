import React, { Component } from "react";

// export default function Videos(props) {
class Videos extends React.Component {
  render() {
    const videoInfo = this.props.videoInfo;

    const videoSection = videoInfo.map(vids => {
      return (
        <div>
          <div className="video-container">
            <div className="element-container">
              <img className="video-element" src={vids.video} />
            </div>
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
}

export default Videos;
// }
