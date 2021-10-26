import { CREATE_REVIEW, REMOVE_REVIEW } from "./types"

const initialState = {
  reviews: [],
  fetchedReviews: []
}

export const reviewsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_REVIEW:
      return {...state, reviews: [...state.reviews, action.payload]}
    case REMOVE_REVIEW:
      return {...state, reviews: state.reviews.filter(review => review.id !== action.payload)} 
    default: return state
  }
}