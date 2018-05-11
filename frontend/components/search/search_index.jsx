import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let searchResults;
    if (this.props.podcasts.length === 0) {
      searchResults = [];
    } else {
      searchResults = this.props.podcasts.map((result, idx) =>
      <Link className="index-item" to={`/podcasts/${result.collectionName}`}>
      <li className="index-item" key={result.collectionName} > <img className="podcast-artwork" src={result.artworkUrl600} /> <br />{result.collectionName}</li>
      </Link>
  )
    }
    return (
      <div>
        {searchResults}
      </div>
    );
  };
}

export default SearchIndex;
