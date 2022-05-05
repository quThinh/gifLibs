import { combineReducers } from 'redux';

import searchReducer from '../component/searchSlice';
import favouriteReducer from '../component/favouriteSlice';

const rootReducer = combineReducers({
  Search: searchReducer,
  Favor: favouriteReducer,
});

export default rootReducer;
