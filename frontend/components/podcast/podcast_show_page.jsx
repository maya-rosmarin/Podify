import React from 'react';

class PodcastShowPage extends React.Component {

  componentDidMount () {
    debugger
    this.props.requestAllPodcasts(this.props.match.params.collectionName);
  }

  render () {
    let title, artwork;
    debugger
    if (this.props.match.params.collectionName) {
      title = this.props.match.params.collectionName;
      artwork = this.props.match.params.artworkUrl600;
    } else {
      title = ""
      artwork = ""
    }
    return (
      <div>
        <h1 className="show-page-title" >{title} {artwork}</h1>
        <div>{artwork}</div>
      </div>
    )
  }
};

export default PodcastShowPage;
