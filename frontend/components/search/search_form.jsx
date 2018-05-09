import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import Nav from '../nav/nav';

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState(
      { searchQuery: e.target.value },
      () => this.props.requestAllPodcasts(this.state.searchQuery)
    )
  }

  render () {
    return (
      <div className="search-page">
        <Nav currentUser={this.props.currentUser}/>
        <div className="search-container">
          <input className="search-input" type="text" onChange={this.handleChange}   placeholder="Search for a podcast"/>
        </div>
      </div>
    )
  }

};

export default SearchForm;
