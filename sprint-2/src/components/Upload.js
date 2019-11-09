import React from "react";
import Thumbnail from "../assets/Images/Upload-video-preview.jpg";
export default function Upload() {
  return (
    <div className="thumbnail-container">
      <h2 className="upload-title">Upload Video</h2>
      <p className="thumbnail-title">VIDEO THUMBNAIL</p>
      <img className="thumbnail-image" src={Thumbnail} />
      <p className="input-title">TITLE YOUR VIDEO</p>
      <input
        className="title-input"
        type="text"
        name="name"
        value=""
        placeholder="Add a title to your video"
      />
      <p className="description-title">ADD A VIDEO DESCRIPTION</p>
      <textarea
        className="description-input"
        type="text"
        name="name"
        value=""
        placeholder="Add a description of your video"
      />
      <button className="publish-button">PUBLISH</button>
    </div>
  );
}
