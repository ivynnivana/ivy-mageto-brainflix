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
    axios.get("http://localhost:5000/api/videos").then(answer => {
      console.log(answer.data);
      this.setState({ videoInfo: answer.data });
      axios
        .get(`http://localhost:5000/api/videos/${this.props.id}`)
        .then(res => {
          console.log(res.data.id);
          this.setState({ mainInfo: res.data });
        });
    });
  }

  componentDidUpdate(previous) {
    const filtered = this.state.videoInfo.findIndex(video => {
      return video.id === this.props.id;
    });
    if (this.state.mainInfo) {
      const newVideo = {
        id: this.state.mainInfo[0].id,
        title: this.state.mainInfo[0].title,
        channel: this.state.mainInfo[0].channel,
        image: this.state.mainInfo[0].image
      };
      this.state.videoInfo.push(newVideo);
    }

    this.state.videoInfo.splice(filtered, 1);

    if (this.props !== previous) {
      axios
        .get(`http://localhost:5000/api/videos/${this.props.id}`)
        .then(res => {
          this.setState({
            mainInfo: res.data,
            videoInfo: this.state.videoInfo
          });
        });
    }
  }

  render() {
    if (this.state.mainInfo === undefined) return <h1>Loading</h1>;
    else {
      const mainInfo = this.state.mainInfo[0];
      console.log(mainInfo);
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
            <Comments commentsInfo={this.state.mainInfo[0]} />
            <Videos videoInfo={this.state.videoInfo} />
          </div>
        </main>
      );
    }
  }
}
