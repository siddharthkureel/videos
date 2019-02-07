import React from "react";

const VideoItem=(props)=>{
    return<div onClick={()=>props.onVideoSelect(props.video)} className="container">
        <div><img src={props.video.snippet.thumbnails.medium.url} alt="thumbnail" /></div>
        <div className="header">
            {props.video.snippet.title}
        </div>
    </div>
};
export default VideoItem;