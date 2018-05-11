import React from 'react';
import FaMusic from 'react-icons/lib/fa/music';

export default (props) => {
  return (
    <div className="episode-index-item"><button className="musical-note-button">< FaMusic /></button>    {props.episode.title}
      <audio ref={(tag) => props.episode.entry_id} src={props.episode.audio} ></audio>
    </div>
  )
}
