import React from "react";

const VideoDetail = ({video})=>{
    if(!video){
        return<div>Loading</div>
    }
    const videoSRC =`https://www.youtube.com/embed/${video.id.videoId}`;
    
    return<div>
        <div className="ui embed">
        <iframe src={videoSRC} title="videoPlayer"/>
        </div>
        <div className="ui segment">
            <h3 >{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            
        </div>
    </div>
}
export default VideoDetail;