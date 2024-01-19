import { SET_ITEMS } from '../actions/actionTypes';

// Initial state for the items reducer
const initialState = {
  items: [] // Initially, items are set to an empty array
};

// The items reducer function
export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      // Handle the SET_ITEMS action to update the state with the new items
      return { ...state, items: action.payload };
    default:
      // Return the current state for any other actions
      return state;
  }
}
