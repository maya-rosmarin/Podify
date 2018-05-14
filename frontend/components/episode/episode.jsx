import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';

class Episode extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      play: false,
      playIcon: <FaPlay />
    }
    this.play = this.play.bind(this);
  }

  play () {
    if (this.state.play === false) {
      this.audio.play()
      this.setState({play: true})
    } else {
      this.audio.pause()
      this.setState({play: false})
    };
  }

  render () {
    if (this.state.play === true) {
      this.state.playIcon = <FaPause />
    } else {
      this.state.playIcon = <FaPlay />
    };

    return (
      <div className="episode-index-item"><div className="musical-note-button"><div className="music-note" onClick={this.play}> {this.state.playIcon}</div></div>    {this.props.episode.title}
        <div className="summary-hover">{this.props.episode.summary}</div>
        <audio src={this.props.episode.audio} ref={(audio) => this.audio = audio} ></audio>
      </div>
    )
  }
}

// ref={(tag) =>
export default Episode;
