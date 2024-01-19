import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import itemsReducer from './itemsReducer';

// Combining reducers
// This is the root reducer of the application, combining different reducing functions
export default combineReducers({
  categories: categoriesReducer, // categoriesReducer handles the state for categories
  items: itemsReducer // itemsReducer handles the state for items
});
