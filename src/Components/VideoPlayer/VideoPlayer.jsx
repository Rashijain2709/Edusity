/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
/* eslint-enable no-unused-vars */
import './VideoPlayer.css'
import PropTypes from 'prop-types';
import video from '../../assets/Images/college-video.mp4'

const VideoPlayer = ({playState ,setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current) {
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

VideoPlayer.propTypes = {
    playState: PropTypes.bool.isRequired, 
    setPlayState: PropTypes.func.isRequired 
};
  

export default VideoPlayer