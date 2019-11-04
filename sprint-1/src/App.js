import React, { Component } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Comments from "./components/Comments";
import Videos from "./components/Videos";
import ImgOne from "./assets/Images/video-list-1.jpg";
import ImgTwo from "./assets/Images/video-list-2.jpg";
import ImgThree from "./assets/Images/video-list-3.jpg";
import ImgFour from "./assets/Images/video-list-4.jpg";
import ImgFive from "./assets/Images/video-list-5.jpg";
import ImgSix from "./assets/Images/video-list-6.jpg";
import ImgSeven from "./assets/Images/video-list-7.jpg";
import ImgEight from "./assets/Images/video-list-8.jpg";

// export default function App() {
const commentsInfo = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

const videoInfo = [
  {
    video: ImgOne,
    text: "Become A Travel Pro In One Easy Lesson",
    writer: "Todd Welch"
  },
  {
    video: ImgTwo,
    text: "Les Houches The Hidden Gem Of The Chamonix",
    writer: "Cornelia Blair"
  },
  {
    video: ImgThree,
    text: "Travel Health Useful Medical Information For",
    writer: "Glen Harper"
  },
  {
    video: ImgFour,
    text: "Cheap Airline Tickets Great Ways To Save",
    writer: "Emily Harper"
  },
  {
    video: ImgFive,
    text: "Take A Romantic Break In A Boutique Hotel",
    writer: "Ethan Owen"
  },
  {
    video: ImgSix,
    text: "Choose The Perfect Accommodations",
    writer: "Lydia Perez"
  },
  {
    video: ImgSeven,
    text: "Cruising Destination Ideas",
    writer: "Timothy Austin"
  },
  {
    video: ImgEight,
    text: "Train Travel On Track For Safety",
    writer: "Scotty Cranmer"
  }
];

class App extends React.Component {
  state = {
    commentsInfo: commentsInfo,
    videoInfo: videoInfo
  };
  render() {
    return (
      <>
        <Header />
        <MainContent />
        <div className="flex-item">
          <Comments commentsInfo={this.state.commentsInfo} />
          <Videos videoInfo={this.state.videoInfo} />
        </div>
      </>
    );
  }
}

export default App;

// render () {
// return (
//   <>
//     <Header />
//     <MainContent />
//     <div className="flex-item">
//       <Comments commentsInfo={commentsInfo} />
//       <Videos videoInfo={videoInfo} />
//     </div>
//   </>
// );
// }
// }

// function App() {
//   return (<><Header />
//   <MainContent />
//   </>)
// }

// export default App;
