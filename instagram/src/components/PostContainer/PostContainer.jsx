import React, { Component } from "react";
import CommentSection from '../CommentSection/CommentSection';
import "./PostContainer.css";

class PostContainer extends Component {

  render() {
    return(
      <div className='post-container'>
        <div className="img-logo-wrapper">
          <img src={this.props.data.thumbnailUrl} />
          <p>{this.props.data.username}</p>
        </div>
        <img src={this.props.data.imageUrl} />
        <CommentSection comments={this.props.data.comments} likes={this.props.data.likes}/>
      </div>
    )
  }
}

export default PostContainer;