import { CREATE_REVIEW } from "./types";

export function createReview(review) {

  console.log(review)


  return {
    type: CREATE_REVIEW,
    payload: review
  }
}