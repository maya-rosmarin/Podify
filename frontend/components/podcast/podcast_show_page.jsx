import React from 'react';

class PodcastShowPage extends React.Component {

  componentDidMount () {
    this.props.requestAllPodcasts(this.props.searchQuery);
  }

  render () {
    let title;
    if (this.props.currentPodcast) {
      title = this.props.currentPodcast.collectionName;
    } else {
      title = ""
    }
    return (
      <div>
        <h1 className="show-page-title" >{title}</h1>
      </div>
    )
  }
};

export default PodcastShowPage;
