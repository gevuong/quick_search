import * as CampgroundAPIUtil from '../util/campground_api_util';

// export action type
export const RECEIVE_ALL_CAMPGROUNDS = 'RECEIVE_ALL_CAMPGROUNDS';

// sync action creator
export const receiveAllCampgrounds = campgrounds => (
    {
        type: RECEIVE_ALL_CAMPGROUNDS,
        campgrounds,
    }
);

// async thunk action creator
export const requestAllCampgrounds = () => dispatch => {
    return CampgroundAPIUtil.fetchAllCampgrounds().then(
        things => dispatch(receiveAllCampgrounds(things))
    );
};
