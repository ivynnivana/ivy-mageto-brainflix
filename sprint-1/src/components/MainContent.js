import React from 'react';
import Video from "../assets/Video/BrainStation Sample Video.mp4";

export default function MainContent(){
    return(
        <main>
            <video className="main-video" controls>
                <source src={Video} type="video/mp4"></source>
            </video>
        </main>
    )
}