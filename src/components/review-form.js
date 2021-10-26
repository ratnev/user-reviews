import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createReview} from '../redux/actions';
import './reviews.css';

const ReviewForm = ({createReview}) => {
  const [state, setState] = useState({name: '', comment: ''})

  const submitHandler = event => {
    event.preventDefault()

    const {name, comment} = state;

    const newReview = {
      id: Date.now().toString(),
      name,
      comment
    }


    createReview(newReview);
    setState({name: '', comment: ''});
  }

  const changeInputHandler = event => {
    setState(prev =>  ({...prev, name: event.target.value}));
  }

  const handleComment = event => {
    setState(prev => ({...prev, comment: event.target.value}));
  }

  return (
    <div className="formWrapper">
      <form className="formContainer" onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="Your name" 
          value={state.name} 
          onChange={changeInputHandler} />
        <textarea 
          name="comment" 
          id="" cols="30" 
          rows="6" 
          placeholder="Your comment"
          value={state.comment} 
          onChange={handleComment}></textarea>
        <button>Add</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createReview
}

export default connect(null, mapDispatchToProps)(ReviewForm)