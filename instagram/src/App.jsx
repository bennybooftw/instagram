import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import dummyData from './dummy-data.js'

class App extends Component {
  constructor() {
    super();
    this.state = { dummyData }
  }


  render() {
    return (
      <div className='App'>
        <SearchBar />
        <>
          {this.state.dummyData.map((post) => {
            return(
              <PostContainer key={post.timestamp} data={post} />
            )
          })}
        </>
      </div>
    );
  }
}

export default App;
