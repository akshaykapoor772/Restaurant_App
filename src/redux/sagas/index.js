import { call, put, takeEvery, all } from 'redux-saga/effects';
import { setCategories, setItems } from '../actions';
import { FETCH_CATEGORIES, FETCH_ITEMS } from '../actions/actionTypes';

// Saga to fetch categories
function* fetchCategoriesSaga() {
  try {
    // API call to fetch categories
    const response = yield call(fetch, 'https://stream-restaurant-menu-svc.herokuapp.com/category');
    const data = yield response.json();
    // Dispatch action to set categories in the store
    yield put(setCategories(data));
  } catch (e) {
    // Log errors if any
    console.log(e);
  }
}

// Watcher saga for FETCH_CATEGORIES action
function* watchFetchCategories() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
}

// Saga to fetch items
function* fetchItemsSaga(action) {
  try {
    // API call to fetch items based on the category
    const response = yield call(fetch, `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${action.payload}`);
    const data = yield response.json();
    // Dispatch action to set items in the store
    yield put(setItems(data));
  } catch (e) {
    // Log errors if any
    console.log(e);
  }
}

// Watcher saga for FETCH_ITEMS action
function* watchFetchItems() {
  yield takeEvery(FETCH_ITEMS, fetchItemsSaga);
}

// Root saga that combines all watcher sagas
export default function* rootSaga() {
  yield all([
    watchFetchCategories(),
    watchFetchItems()
  ]);
}
