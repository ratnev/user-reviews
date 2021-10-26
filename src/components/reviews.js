import React from 'react';
import {connect} from 'react-redux';
import './reviews.css';
import {ReviewPost}  from './review'

const ReviewsList = ({syncReviews}) => {
  return (
    <div className="rootWrapper">
      <h1>User Reviews</h1>
      <ul className="reviewsList">
      {syncReviews.map(review => 
        <li key={review.id}>
        <ReviewPost review={review}/>
        </li>
      )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    syncReviews: state.reviews.reviews
  }
}

export default connect(mapStateToProps, null)(ReviewsList)