import React from "react";
import Vid from "../assets/Images/brainstation.mp4";
import Images from "../assets/Images/video-list-0.jpg";
// import PlayButton from "../assets/Icons/SVG/Icon-play.svg";
// import FullScreenButton from "../assets/Icons/SVG/Icon-fullscreen.svg";
// import VolumeButton from "../assets/Icons/SVG/Icon-volume.svg";

export default function MainContent() {
  return (
    <main>
      <div>
        <div className="img-div">
          <video
            className="main-image"
            src={Vid}
            controls
            poster={Images}
          ></video>
          {/* <img className="main-image" src={Images} alt="" /> */}
        </div>
        {/* <div className="sub-img">
          <img className="sub-img2" src={PlayButton} alt="" />
          <div>
            <img className="sub-img3" src={FullScreenButton} alt="" />
            <img className="sub-img3" src={VolumeButton} alt="" />{" "}
          </div>
        </div> */}
      </div>
    </main>
  );
}
