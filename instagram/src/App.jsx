import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import dummyData from './dummy-data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      input: ''
    }
  }

  searchInputHandler = event => {
    const value = event.target.value;
    this.setState({
      input: value
    })
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchHandler = event => {
    if (event.key === "Enter") {
      this.setState({
        data: this.state.data.filter(post => {
          return post.username === this.state.input;
        })
      });
    }
  }

  render() {
    return (
      <div>
        <SearchBar 
          posts={this.state.data}
          searchHandler={this.searchHandler}
          searchInputHandler={this.searchInputHandler}
        />
        {this.state.data.map(post => {
          return(
            <PostContainer 
              key={post.timestamp} 
              data={this.state.data}
              thumbnail={post.thumbnailUrl}
              username={post.username}
              imageUrl={post.imageUrl}
              likes={post.likes}
              comments={post.comments}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
