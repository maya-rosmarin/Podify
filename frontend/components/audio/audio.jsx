import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaRight from 'react-icons/lib/fa/caret-right'
import FaLeft from 'react-icons/lib/fa/caret-left'

class Audio extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      play: false,
      playIcon: <FaPlay />
    }
    this.play = this.play.bind(this);
  }

  play () {
  }
  // if (this.state.play === false) {
  //   this.audio.play()
  //   this.setState({play: true})
  // } else {
  //   this.audio.pause()
  //   this.setState({play: false})
  // };

  render () {
    return (
      <div className="audio-player">
        <center>
          <button>
            <div className="audio-player-skip">|<FaLeft className="skip-back" /></div>
          </button>
          <button>
            <FaPlay className="audio-player-play-pause" />
          </button>
          <button>
            <div className="audio-player-skip"><FaRight className="skip" />|</div>
          </button>
        </center>
      </div>
    )
  }
}
// {this.props.episode.audio} to be replaced by smoething by store to set currently playing podcast
// slice of state for current song under UI --> setCurrentSong, play, pause
// connect to dispatch of play and pause
// connect to current song thorugh container
// currentsong informatoin sent up by playlist or episode
// <audio src={this.props.currentlyPlaying.audio} ref={(audio) => this.audio = audio} ></audio>

export default Audio;
