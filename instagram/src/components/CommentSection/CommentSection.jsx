import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
  render() {
    return(
      <div className='comment-container'>
        <div className="comment-icons">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div className="likes">
          {this.props.likes + ' likes'}
        </div>
        <div className="comments">
          {this.props.data.map(comment => {
            return(
              <p>{comment.username} <span className='comment-text'>{comment.text}</span></p>
            )
          })}
          <span className='time'>2 Hours Ago</span>
          <hr/>
        </div>
      </div>
    )
  }
}

export default CommentSection;