import { combineReducers } from 'redux';
import campgrounds from './campground_reducer';

const rootReducer = combineReducers({
    campgrounds,
});

export default rootReducer;
