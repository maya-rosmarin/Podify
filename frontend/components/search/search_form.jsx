import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    const podcasts = Object.assign({}, this.state)
    this.props.requestAllPodcasts();
  }

  update (field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render () {
    return (
      <div>
        <div><FaSearch />  Search</div>
        <div className="search-container">
          <form>
            <input className="search-input" type="text" onChange={this.update("searchQuery")}   placeholder="Search for a podcast"/>
          </form>
        </div>
      </div>
    )
  }

};

export default SearchForm;
