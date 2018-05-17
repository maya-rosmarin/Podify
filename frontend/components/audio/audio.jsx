import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaBack from 'react-icons/lib/fa/step-backward';
import FaForward from 'react-icons/lib/fa/step-forward';
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
    if (this.audio) {
      if (this.props.currentEpisodePlaying === false) {
        this.audio.pause()
      } else if (this.props.currentEpisodePlaying === true) {
        this.audio.play()
      };
    }
  }

  render () {
    debugger
    this.playTag();
    let audio, title, padding;
    let play_pause;
    if (this.props.currentEpisode) {
      audio = <audio onCanPlayThrough={() => {this.playTag();}} src={this.props.currentEpisode.audio} ref={(audio) => this.audio = audio} controls ></audio>
      title = this.props.currentEpisode.title
    } else {
      audio = "";
    };
    if (this.props.currentEpisodePlaying) {
      play_pause = <FaPause />
      padding = "";
    } else {
      play_pause = <FaPlay />
      padding = "i";
    }
    return (
      <div className="audio-player">
        <div className="currently-playing">
          {title}
        </div>
        <center>
          {audio}
          <button>
            <div className="audio-player-skip skip-left"><FaBack className="skip-back" /></div>
          </button>
          <button onClick={this.handleClick}>
            <div className="audio-player-play-pause"><div className="padding">{padding}</div>   {play_pause}</div>
          </button>
          <button>
            <div className="audio-player-skip skip-right"><FaForward className="skip" /></div>
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
