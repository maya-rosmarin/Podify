import React from 'react';

export default (props) => {
  return (
    <div>
      <input className="playlist-input" type="text" placeholder="New Playlist"/>
      <button className="green-button" id="create-playlist-button">CREATE</button>
    </div>
  )
}
