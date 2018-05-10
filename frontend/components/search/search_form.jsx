import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import Nav from '../nav/nav';
import SearchIndexContainer from './search_index_container';

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: ""
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
      this.timeout = setTimeout(() => this.props.requestAllPodcasts(this.state.searchQuery), 500)
    }
  )
};

  render () {

    return (
      <div className="search-page">
        <div className="search-container">
          <input className="search-input" type="text" onChange={this.handleChange} placeholder="Search for a podcast"/>
          <SearchIndexContainer />
        </div>
      </div>
    )
  }

};

export default SearchForm;
