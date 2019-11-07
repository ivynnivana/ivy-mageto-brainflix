import React, { Component } from "react";
import axios from "axios";
import Comments from "../components/Comments";
import Videos from "../components/Videos";

export default class MainContent extends React.Component {
  state = {
    videoInfo: undefined,
    mainInfo: undefined
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=a0eceb6e-ee0b-4a90-8328-4a760e06963c"
      )
      .then(answer => {
        console.log(answer.data);
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=a0eceb6e-ee0b-4a90-8328-4a760e06963c`
          )
          .then(res => {
            console.log(res);
            this.setState({ mainInfo: res.data, videoInfo: answer.data });
          });
      });
  }

  componentDidUpdate(previous) {
    if (this.props !== previous) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.id}/?api_key=a0eceb6e-ee0b-4a90-8328-4a760e06963c`
        )
        .then(res => {
          this.setState({ mainInfo: res.data });
        });
    }
  }

  render() {
    if (this.state.mainInfo === undefined) return <h1>Loading</h1>;
    else {
      const mainInfo = this.state.mainInfo;
      return (
        <main>
          <div>
            <div className="img-div">
              <video
                className="main-image"
                src={mainInfo.video}
                controls
                poster={mainInfo.image}
              ></video>
            </div>
          </div>
          <div className="flex-item">
            <Comments commentsInfo={this.state.mainInfo} />
            <Videos videoInfo={this.state.videoInfo} />
          </div>
        </main>
      );
    }
  }
}
