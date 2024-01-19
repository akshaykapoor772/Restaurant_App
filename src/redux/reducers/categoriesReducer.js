import { SET_CATEGORIES } from '../actions/actionTypes';

// Initial state for the categories reducer
const initialState = {
  categories: [] // The categories are initially set to an empty array
};

// The categories reducer function
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      // Handle the SET_CATEGORIES action and update the state with the new categories
      return { ...state, categories: action.payload };
    default:
      // Return the current state for any other actions
      return state;
  }
}
