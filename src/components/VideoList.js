import React from 'react';

const VideoList = (props)=>{
  return(
    <ul>
      <li> {props.videos.length}</li>
    </ul>
  )
}

export default VideoList;
