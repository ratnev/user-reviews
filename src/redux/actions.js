import { CREATE_REVIEW, REMOVE_REVIEW } from "./types";

export function createReview(review) {

  return {
    type: CREATE_REVIEW,
    payload: review
  }
}

export function removeReview(id) {

  return {
    type: REMOVE_REVIEW,
    payload: id
  }
}