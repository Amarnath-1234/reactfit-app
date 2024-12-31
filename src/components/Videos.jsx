import React from 'react'
import videosrc from "../assets/video.mp4"
import Content from './Content'

const VideoSec = () => {
    
  return (
    <div className='videosection'>
    <div className="video-container">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={videosrc} type="video/mp4" />/
        {/* <div className="app"> */}
        <Content/>
        {/* </div> */}
        </video>
      {/* <ContentIterator data={content}/> */}
    </div>
    </div>
  )
}

export default VideoSec