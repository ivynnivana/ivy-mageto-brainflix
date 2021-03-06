import React, { Component } from "react";
import LikesButton from "../assets/Icons/SVG/Icon-likes.svg";
import ViewsButton from "../assets/Icons/SVG/Icon-views.svg";
import MohanImg from "../assets/Images/Mohan-muruge.jpg";
// index is just the i

class Comments extends React.Component {
  render() {
    const commentsInfo = this.props.commentsInfo;

    const commentSection = commentsInfo.map(comments => {
      return (
        <div className="comment-container">
          <button className="button"></button>
          <h4 className="comment-name">{comments.name}</h4>
          <h5 className="comment-date">{comments.date}</h5>
          <div className="comment-text">{comments.comment}</div>
        </div>
      );
    });

    return (
      <div className="main-cont">
        <>
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
              bikers blew the doors off what is possible on two wheels,
              unleashing some of the biggest moments the sport has ever seen.
              While mother nature only allowed for one full run before the
              conditions made it impossible to ride, that was all that was
              needed for event veteran Kyle Strait, who won the event for the
              second time -- eight years after his first Red Cow Rampage title
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
                <button
                  className="form-button"
                  type="submit"
                  value="reset form"
                >
                  COMMENT
                </button>
              </div>
            </form>
          </div>
        </>
        <section className="comment-section">{commentSection}</section>
      </div>
    );
  }
}

export default Comments;
