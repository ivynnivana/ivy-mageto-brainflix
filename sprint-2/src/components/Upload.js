import React from "react";
import Thumbnail from "../assets/Images/Upload-video-preview.jpg";
export default function Upload() {
  return (
    <div className="upload-page">
      <h2 className="upload-title">Upload Video</h2>
      <div className="upload-container">
        <section className="thumbnail-container">
          <p className="thumbnail-title">VIDEO THUMBNAIL</p>
          <img className="thumbnail-image" src={Thumbnail} />
        </section>

        <div className="upload-input__container">
          <div>
            <p className="input-title">TITLE YOUR VIDEO</p>
            <input
              className="title-input"
              type="text"
              name="name"
              value=""
              placeholder="Add a title to your video"
            />
          </div>
          <div className="description-container">
            <p className="description-title">ADD A VIDEO DESCRIPTION</p>
            <textarea
              className="description-input"
              type="text"
              name="name"
              value=""
              placeholder="Add a description of your video"
            />
          </div>
        </div>
      </div>
      <button className="publish-button">PUBLISH</button>
      <p className="cancel-button">CANCEL</p>
    </div>
  );
}
