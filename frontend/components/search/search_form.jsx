import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import Nav from '../nav/nav';
import SearchIndex from './search_index';

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: "",
      // inside json response, returns object with key of response which returns object with key of results
      jsonResponse: {response: {results: []}}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState(
    { searchQuery: e.target.value },
    () => {
      this.timeout = setTimeout(() => this.props.requestAllPodcasts(this.state.searchQuery).then(null, (response) => this.setState({jsonResponse: (JSON.parse(response.responseText))})), 500)
    }
  )
};

  render () {

    return (
      <div className="search-page">
        <div className="search-container">
          <input className="search-input" type="text" onChange={this.handleChange} placeholder="Search for a podcast"/>
        </div>
        <SearchIndex jsonResponse={this.state.jsonResponse} />
      </div>
    )
  }

};

export default SearchForm;
