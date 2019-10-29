import React from 'react';
import Video from "../assets/Video/BrainStation Sample Video.mp4";

export default function MainContent(){
    return(
        <main>
            <video className="main-video" controls>
                <source src={Video} type="video/mp4"></source>
            </video>
            <div><h1 className="main-title">BMX Rampage: 2018 Highlights</h1></div>
            <div className="main-author"><p>By Red Crow</p>
            <p >12/18/2018</p></div>
            <div><p>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p></div>
        </main>
    )
}