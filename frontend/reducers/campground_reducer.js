import merge from 'lodash/merge';
import { RECEIVE_ALL_CAMPGROUNDS } from '../actions/campground_actions';

// reducer must never mutate previus state. Instead, return a new array or object with the necessary changes.
const campgroundsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CAMPGROUNDS:
            const campgrounds = action.campgrounds;
            return merge({}, state, campgrounds);
        default:
            return state;
    }
}

export default campgroundsReducer;
