import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import moment from 'moment';
import PropTypes from 'prop-types';

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.comments,
      input: ''
    }
  }

  submitHandler = event => {
    const newComment = {
      username: "JohnDoe",
      text: this.state.input,
      timestamp: moment()
    }
    if(event.key === 'Enter') {
      this.setState({
        comments: [...this.state.comments, newComment],
        input: ''
      })
      event.target.value = '';
    }
  }

  changeHandler = event => {
    const value = event.target.value;
    this.setState({
      input: value
    })
  }

  onFocus = event => {
    event.target.value = '';
  }

  onBlur = event => {
    event.target.value = 'Add a comment...'
  }

  render() {
    return(
<<<<<<< HEAD
      <>
        {this.state.comments.map(comment => {
          return(
            <Comment 
              key={this.state.timestamp}
              commentUser={comment.username}
              comment={comment.text}
            />
          )
        })}
        <div className="time">{moment(this.props.time).fromNow()}</div>
        <input 
          type="text"
          className='add-comment'
          defaultValue='Add a comment...'
          onChange={this.changeHandler}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.submitHandler}
        />
      </>
=======
      <div className='comment-container'>
        <div className="comment-icons">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div className="likes">
          {this.props.likes + ' likes'}
        </div>
        <div className="comments">
          {this.props.comments.map(comment => {
            return(
              <p>{comment.username} <span className='comment-text'>{comment.text}</span></p>
            )
          })}
          <span className='time'>2 Hours Ago</span>
          <hr/>
        </div>
        <div className="add-comment">
          <input type="text" placeholder='Add a comment...'/>
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
>>>>>>> df12b659a68204e537d25439c61c60568faf2bea
    )
  }
}

CommentSection.PropTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
}


export default CommentSection;