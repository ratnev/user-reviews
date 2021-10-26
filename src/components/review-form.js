import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createReview} from '../redux/actions';
import axios from 'axios';
import './reviews.css';

axios.interceptors.request.use(config => {
  console.log('Request was sent');

  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});

const ReviewForm = ({createReview}) => {
  const [state, setState] = useState({name: '', comment: ''})

  const addNewReview = (userName, payload) => {
    axios.post(`https://bad-domain.com/api/ui/user/${userName}/reviews`, payload)
    .then(response => console.log(response))
    .catch(error => alert(error));
  }

  const submitHandler = event => {
    event.preventDefault()

    const {name, comment} = state;

    const newReview = {
      id: Date.now().toString(),
      name,
      comment
    }


    createReview(newReview);
    addNewReview('Denys', newReview);
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