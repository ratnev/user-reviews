import { CREATE_REVIEW } from "./types"

const initialState = {
  reviews: [],
  fetchedReviews: []
}

export const reviewsReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_REVIEW:
      return {...state, reviews: [...state.reviews, action.payload]} 
    default: return state
  }
}