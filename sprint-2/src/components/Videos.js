import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Videos extends React.Component {
  render() {
    const videoSection = this.props.videoInfo.map(vids => {
      return (
        <div>
          <div className="video-container">
            <div className="element-container">
              <Link to={`${vids.id}`}>
                <img className="video-element" src={vids.image} />
              </Link>
            </div>
            <div className="text-container">
              <div className="video-text">{vids.title}</div>
              <div className="video-writer">{vids.channel}</div>
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
