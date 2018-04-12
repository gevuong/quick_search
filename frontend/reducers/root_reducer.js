import { combineReducers } from 'redux';
import campgrounds from './campground_reducer';

const rootReducer = combineReducers({
    campgrounds, // syntactic sugar for campgrounds: campgroundsReducer
});

export default rootReducer;
