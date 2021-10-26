import { combineReducers } from "redux";
import { reviewsReducer } from "./reviewsReducer";

export const rootReducer = combineReducers({
  reviews: reviewsReducer
})