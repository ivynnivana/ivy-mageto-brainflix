import React from "react";
// import Video from "../assets/Video/BrainStation Sample Video.mp4";
import Images from "../assets/Images/video-list-0.jpg";
import PlayButton from "../assets/Icons/SVG/Icon-play.svg";
import FullScreenButton from "../assets/Icons/SVG/Icon-fullscreen.svg";
import VolumeButton from "../assets/Icons/SVG/Icon-volume.svg";
import LikesButton from "../assets/Icons/SVG/Icon-likes.svg";
import ViewsButton from "../assets/Icons/SVG/Icon-views.svg";
import MohanImg from "../assets/Images/Mohan-muruge.jpg";

export default function MainContent() {
  return (
    <main>
      <div>
        <div className="img-div">
          <img className="main-image" src={Images} alt="" />
        </div>
        <div className="sub-img">
          <img className="sub-img2" src={PlayButton} alt="" />
          <div>
            <img className="sub-img3" src={FullScreenButton} alt="" />
            <img className="sub-img3" src={VolumeButton} alt="" />{" "}
          </div>
        </div>
        <div className="main-container">
          <h1 className="main-title">BMX Rampage: 2018 Highlights</h1>
          <div className="main-container__two">
            <div className="main-author">
              <p className="main-author__name">By Red Crow</p>
              <p className="main-author__date">12/18/2018</p>
            </div>
            <div className="views-button">
              <img className="views-symbol" src={ViewsButton} alt="" />
              <p className="views-numbers">1,001,023</p>
              <div className="likes-button">
                <img className="likes-symbol" src={LikesButton} alt="" />
                <p className="likes-numbers">110,985</p>
              </div>
            </div>
          </div>
          <p className="main-paragraph">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
          <span className="comments-title">3 Comments</span>
          <div>
            <p className="form-title">JOIN THE CONVERSATION</p>
          </div>
          <form>
            <div className="form-container">
              <img className="form-img" src={MohanImg} alt="avatar" />
              <input
                className="form-input"
                type="text"
                name="name"
                value=""
                placeholder="That was easily the most spectacular BMX moment ever."
              />
              <button className="form-button" type="submit" value="reset form">
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
