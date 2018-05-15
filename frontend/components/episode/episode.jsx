import React from 'react';

class Episode extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="episode-index-item">
        <div className="musical-note-button">
          <div className="music-note">{this.props.episode.title}</div>
            <div className="summary-hover">{this.props.episode.summary}
            </div>
        </div>
      </div>
    )
  }
}
//   // instead of this.play, this.setcurrentsong and dispatch action within audio to play, audio component listening for changes to song playing
//   {this.state.playIcon}</div></div>
export default Episode;
