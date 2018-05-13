import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';

class Episode extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="episode-index-item"><button onClick={this.play} className="musical-note-button">< FaPlay className="music-note" /></button>    {this.props.episode.title} - {this.props.episode.itunes_author}
        <div className="summary-hover">{this.props.episode.summary}</div>
        <audio src={this.props.episode.audio} src={this.props.episode.audio}  ></audio>
      </div>
    )
  }
}

// ref={(tag) =>
export default Episode;
