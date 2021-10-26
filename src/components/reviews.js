import React, {useState} from 'react';
import './reviews.css';
import {ReviewForm} from './review-form';
import {ReviewPost}  from './review'

export function ReviewsList() {
  const [reviews, setReviews] = useState([{id: "12345",name: "John Dough", comment: "Very nice indeed"}]);

  return (
    <div className="rootWrapper">
      <h1>User Reviews</h1>
      <ul className="reviewsList">
      {reviews.map(review => 
        <li key={review.id}>
        <ReviewPost name={review.name} comment={review.comment}/>
        </li>
      )}
      </ul>
        <ReviewForm />
    </div>
  )
}