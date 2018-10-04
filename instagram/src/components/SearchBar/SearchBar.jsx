import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  render() {
    return(
      <div className="nav-container">
        <div className="search-container">
          <form type='text' size='45' placeholder='Search Instagram...'></form>
        </div>
      </div>
    )
  }
}

export default SearchBar;