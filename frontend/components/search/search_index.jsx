import React from 'react';

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
      searchResults = this.props.jsonResponse.map((result, idx) => <li className="index-item" key={idx} > <img className="podcast-artwork" src={result.artworkUrl100} /> {result.collectionName}</li>)
    }
    return (
      <div>
        {searchResults}
      </div>
    );
  };
}

export default SearchIndex;
