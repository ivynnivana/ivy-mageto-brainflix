import React, { Component } from "react";
import LikesButton from "../assets/Icons/SVG/Icon-likes.svg";
import ViewsButton from "../assets/Icons/SVG/Icon-views.svg";
import MohanImg from "../assets/Images/Mohan-muruge.jpg";
// index is just the i
// ? goes before query parameters when you want to add things like api keys
// & give more than one query parameter
// query parameter : key=value

export default class Comments extends React.Component {
  componentDidMount() {}
  render() {
    const commentsInfo = this.props.commentsInfo;

    console.log(this.props.commentsInfo);
    const commentSection = this.props.commentsInfo.comments.map(comm => {
      let ts = new Date(comm.timestamp);
      let date = ts.getDate();
      let month = ts.getMonth() + 1;
      let year = ts.getFullYear();
      let today = date + "/" + month + "/" + year;

      return (
        <div className="comment-container">
          <button className="button"></button>
          <h4 className="comment-name">{comm.name}</h4>

          <h5 className="comment-date">{today}</h5>
          <div className="comment-text">{comm.comment}</div>
        </div>
      );
    });

    let ts = new Date(commentsInfo.timestamp);
    let date = ts.getDate();
    let month = ts.getMonth() + 1;
    let year = ts.getFullYear();
    let TD = date + "/" + month + "/" + year;

    return (
      <div className="main-cont">
        <>
          <div className="main-container">
            <h1 className="main-title">{commentsInfo.title}</h1>
            <div className="main-container__two">
              <div className="main-author">
                <p className="main-author__name">{commentsInfo.channel}</p>
                <p className="main-author__date">{TD}</p>
              </div>
              <div className="views-button">
                <img className="views-symbol" src={ViewsButton} alt="" />
                <p className="views-numbers">{commentsInfo.views}</p>
                <div className="likes-button">
                  <img className="likes-symbol" src={LikesButton} alt="" />
                  <p className="likes-numbers">{commentsInfo.likes}</p>
                </div>
              </div>
            </div>
            <p className="main-paragraph">{commentsInfo.description}</p>
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
        <div className="main-cont">
          <section className="comment-section">{commentSection}</section>
        </div>
      </div>
    );
  }
}
