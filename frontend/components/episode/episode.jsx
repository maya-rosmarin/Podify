import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';

class Episode extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    this.props.setCurrentEpisode(this.props.episode.id);
    this.play();
  }

  play () {
    if (this.props.currentEpisodePlaying) {
      this.props.pauseCurrentEpisode();
    } else {
      this.props.playCurrentEpisode();
    };
  }

  render () {
    let playIcon, collection_name;
    if (this.props.episode.id === this.props.currentEpisodeId && this.props.currentEpisodePlaying) {
      playIcon = <FaPause onClick={this.handleClick} />
    } else {
      playIcon = <FaPlay onClick={this.handleClick}/>
    }
    if (this.props.episode.collection_name) {
      collection_name = `${this.props.episode.collection_name}`
    }
    return (
      <div className="episode-index-item">
        <div className="musical-note-button">
          <div className="ep">
            <div className="music-note" id="ep-title">{playIcon}{this.props.episode.title}</div>
            <div>{collection_name}</div>
          </div>
            <div className="summary-hover">{this.props.episode.summary}
            </div>
        </div>
      </div>
    )
  }
}

export default Episode;
