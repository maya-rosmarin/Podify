import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaBack from 'react-icons/lib/fa/step-backward';
import FaForward from 'react-icons/lib/fa/step-forward';
import FaRight from 'react-icons/lib/fa/caret-right';
import FaLeft from 'react-icons/lib/fa/caret-left';

class Audio extends React.Component {
  constructor (props) {
    super(props);
    this.play = this.play.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.state = {
      volume: 0.5
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.play();
  }

  handleVolume (e) {
    this.setState({ volume: e.target.value }, () => this.audio.volume = this.state.volume )
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
    let audio, title, padding, disabled, className, skipBackward, skipForward, play_pause;
    if (this.props.currentEpisodeLocal) {
      audio = <audio onCanPlayThrough={() => {this.playTag();}} src={this.props.currentEpisodeLocal.audio} ref={(audio) => this.audio = audio} ></audio>
      title = this.props.currentEpisodeLocal.title
      disabled = false;
      className = "audio-player-play-pause"
      skipBackward = "audio-player-skip skip-left"
      skipForward = "audio-player-skip skip-right"
    } else if (this.props.currentEpisodeRemote) {
      audio = <audio onCanPlayThrough={() => {this.playTag();}} src={this.props.currentEpisodeRemote.audio} ref={(audio) => this.audio = audio} ></audio>
      title = this.props.currentEpisodeRemote.title
      disabled = false
      className = "audio-player-play-pause"
      skipBackward = "audio-player-skip skip-left"
      skipForward = "audio-player-skip skip-right"
    } else {
      audio = "";
      disabled = true;
      className = "audio-player-play"
      skipForward = "disabled-skip-forward"
      skipBackward = "disabled-skip-backward"
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
          <button disabled={disabled}>
            <div className={skipBackward}><FaBack className="skip-back" /></div>
          </button>
          <button className="play-button" onClick={this.handleClick} disabled={disabled}>
            <div className={className}><div className="padding">{padding}</div>   {play_pause}</div>
          </button>
          <button disabled={disabled}>
            <div className={skipForward}><FaForward className="skip" /></div>
          </button>
        </center>
        <right className="slidecontainer">
          <input className="slider" type="range" min="0" max="1" step="0.05" onChange={this.handleVolume} value={this.state.volume}></input>
        </right>
      </div>
    )
  }
}



export default Audio;
