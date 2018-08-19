import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props)=>{
  const videoItem = props.videos.map((video)=>{
    return <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      video = {video}
      key={video.etag}/>
  });

  return(
    <div className="col-md-8">
      <ul>
        {videoItem}
      </ul>
    </div>
  )
}

export default VideoList;
