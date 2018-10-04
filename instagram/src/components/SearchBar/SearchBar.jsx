import React from 'react';
import './SearchBar.css';

	
const SearchBar = () => {
  return (
    <div className='search-container'>
      <div className="search-logo">
        <i className="fab fa-instagram"></i>  
        <p className='instagram-text'>Instagram</p>
      </div>
      <input className='input-search' placeholder="🔍 Search" />
      <div className="nav-icons">
      <i className="far fa-compass fa-lg" />
      <i className="far fa-heart fa-lg" />
      <i className="far fa-user fa-lg" />
      </div>
    </div>
  );
};
 
export default SearchBar;