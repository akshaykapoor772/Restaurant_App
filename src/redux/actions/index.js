import { FETCH_CATEGORIES, SET_CATEGORIES, FETCH_ITEMS, SET_ITEMS } from './actionTypes';

// Action creator for initiating the fetching of categories
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});

// Action creator for setting categories in the Redux store
export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories
});

// Action creator for initiating the fetching of items for a specific category
export const fetchItems = category => ({
  type: FETCH_ITEMS,
  payload: category
});

// Action creator for setting items in the Redux store
export const setItems = items => ({
  type: SET_ITEMS,
  payload: items
});
