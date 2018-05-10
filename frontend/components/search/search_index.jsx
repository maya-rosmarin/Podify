import React from 'react';

class SearchIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      jsonResponse: {response: {results: []}}
    }
  }

  render () {
    debugger
    // let searchResults = {this.props.jsonResponse.response.results.map((result) => <li>result</li>)}
    return (
      <div></div>
    );
  };
}

export default SearchIndex;
