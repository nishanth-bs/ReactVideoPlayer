import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props)=>{
  const videoItem = props.videos.map((video)=>{
    return <VideoListItem video = {video} key={video.etag}/>
  });

  return(
    <ul>
      {videoItem}
    </ul>
  )
}

export default VideoList;
