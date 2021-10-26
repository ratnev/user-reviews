import React from 'react';
import './reviews.css';
import {connect} from 'react-redux';
import {removeReview} from '../redux/actions';
import avatarIcon from '../assets/Bioman-Avatar-1-Red-icon.png'
import deleteIcon from '../assets/icons8-delete.svg'

const ReviewPost = ({review, removeReview}) => {


  const handleRemove = id => {
    removeReview(id)
  }

  return (
    <div className="reviewWrapper">
     <img src={avatarIcon} alt="avatar icon" className="imageContainer"></img>
     <div className="infoWrapper">
       <h2 className="reviewerName">
         {review.name}
       </h2>
       <p className="reviewerComment">
         {review.comment}
       </p>
     </div>
     <img src={deleteIcon} alt="delete icon" className="deleteIcon" onClick={() => handleRemove(review.id)}></img>
    </div>
  )
}

const mapDispatchToProps = {
  removeReview
}

export default connect(null, mapDispatchToProps )(ReviewPost)