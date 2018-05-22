import React from 'react';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';

class Episode extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick (e) {
  //   e.preventDefault();
  //   let previousEpisode = this.props.currentEpisode;
  //   this.props.setCurrentEpisode(this.props.episode.id);
  //   if (this.props.isCurrentEpisodePlaying && (previousEpisode !== this.props.currentEpisode)) {
  //     this.props.playCurrentEpisode();
  //     previousEpisode = null;
  //   } else {
  //     this.play();
  //   }
  // }


  handleClick (e) {
    e.preventDefault();
    this.props.setCurrentEpisode(this.props.episode.id)
    // let previousEpisodeId = this.props.currentEpisodeId;
    // this.props.setCurrentEpisode(this.props.episode.id);
    // if (!this.props.isCurrentEpisodePlaying) {
    //   this.props.playCurrentEpisode();
    // } else if (this.props.isCurrentEpisodePlaying && (previousEpisodeId !== this.props.episode.id)){
    //   console.log(previousEpisodeId)
    //   this.props.playCurrentEpisode();
    // } else if (this.props.isCurrentEpisodePlaying && (previousEpisodeId === this.props.episode.id)) {
    //   this.props.pauseCurrentEpisode();
    // }
  }

  play () {
    if (this.props.isCurrentEpisodePlaying) {
      this.props.pauseCurrentEpisode();
    } else {
      this.props.playCurrentEpisode();
    };
  }

  render () {
    let playIcon, collection_name;
    if (this.props.episode.id === this.props.currentEpisodeId && this.props.isCurrentEpisodePlaying) {
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
