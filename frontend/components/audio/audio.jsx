import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaRight from 'react-icons/lib/fa/caret-right'
import FaLeft from 'react-icons/lib/fa/caret-left'

class Audio extends React.Component {
  constructor (props) {
    super(props);
    this.play = this.play.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    this.play();
  }

  play () {
    if (this.props.currentEpisodePlaying === false) {
      this.props.playCurrentEpisode();
    } else if (this.props.currentEpisodePlaying === true) {
      this.props.pauseCurrentEpisode();
    };
  }

  playTag () {
    debugger
    if (this.audio) {
      if (this.props.currentEpisodePlaying === false) {
        this.audio.pause()
      } else if (this.props.currentEpisodePlaying === true) {
        this.audio.play()
      };
    }
  }

  render () {
    this.playTag();
    let audio;
    if (this.props.currentEpisode) {
      audio = <audio onCanPlayThrough={() => {this.playTag();}} src={this.props.currentEpisode.audio} ref={(audio) => this.audio = audio} ></audio>
    } else {
      audio = "";
    };
    return (
      <div className="audio-player">
        <center>
          {audio}
          <button>
            <div className="audio-player-skip skip-left">|<FaLeft className="skip-back" /></div>
          </button>
          <button onClick={this.handleClick}>
            <FaPlay className="audio-player-play-pause" />
          </button>
          <button>
            <div className="audio-player-skip skip-right"><FaRight className="skip" />|</div>
          </button>
        </center>
        <right>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
          </div>
        </right>
      </div>
    )
  }
}

export default Audio;
