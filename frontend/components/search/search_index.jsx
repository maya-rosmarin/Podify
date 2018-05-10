import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let searchResults;
    debugger
    if (this.props.jsonResponse.length === 0) {
      searchResults = [];
    } else {
      searchResults = this.props.jsonResponse.map((result, idx) =>
      <Link className="index-item" to={`/podcasts/${result.collectionId}`}>
      <li className="index-item" key={result.collectionId} > <img className="podcast-artwork" src={result.artworkUrl100} /> <br />{result.collectionName}</li>
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
