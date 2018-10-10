import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";

 class PostContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      thumbnailUrl: props.thumbnail,
      username: props.username,
      imageUrl: props.imageUrl,
      likes: props.likes
    };
  }
  
   likeClickHandler = event => {
    event.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  };

  commentClickHandler = event => {
    event.preventDefault();
    document.querySelector(".add-comment").focus();
  };

  render() {
<<<<<<< HEAD
    return (
      <div className="card">
        <Post
          thumbnail={this.state.thumbnailUrl}
          username={this.state.username}
          imageUrl={this.state.imageUrl}
          likes={this.state.likes}
          likeClickHandler={this.likeClickHandler}
          commentClickHandler={this.commentClickHandler}
        />
        <CommentSection comments={this.props.comments} time={this.props.time} />
=======
    return(
      <div className='post-container'>
        <div className="img-logo-wrapper">
          <img src={this.props.data.thumbnailUrl} />
          <p>{this.props.data.username}</p>
        </div>
        <img src={this.props.data.imageUrl} />
        <CommentSection comments={this.props.data.comments} likes={this.props.data.likes}/>
>>>>>>> df12b659a68204e537d25439c61c60568faf2bea
      </div>
    );
  }
}

 export default PostContainer;