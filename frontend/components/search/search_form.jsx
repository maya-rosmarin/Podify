import React from 'react';

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const podcasts = Object.assign({}, this.state)
  }

  render () {
    return (
      <div>
        <form>
          <h1>hello from search</h1>
          <input className="input-field" type="text" onChange={this.update("searchQuery")} placeholder="Search"/>
        </form>
      </div>
    )
  }

};

export default SearchForm;
