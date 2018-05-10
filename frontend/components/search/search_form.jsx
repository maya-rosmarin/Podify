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

  debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

  render () {

    return (
      <div className="search-page">
        <div className="search-container">
          <input className="search-input" type="text" onChange={this.handleChange} placeholder="Search for a podcast"/>
        </div>
      </div>
    )
  }

};

export default SearchForm;
