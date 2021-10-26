import React from 'react';
import './reviews.css';

export function ReviewForm() {

  return (
    <div className="formWrapper">
      <form className="formContainer">
        <input type="text" placeholder="Your name" />
        <textarea name="comment" id="" cols="30" rows="6" placeholder="Your comment"></textarea>
        <button>Add</button>
      </form>
    </div>
  )
}