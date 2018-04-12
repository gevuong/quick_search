import { connect } from 'react-redux';

import { requestAllCampgrounds } from '../actions/campground_actions';
import CampgroundIndex from './campground_index';

const mapStateToProps = ({ campgrounds }) => ({
    campgrounds,
});

// function that returns an object containing functions that can be called to dispatch actions to the store.
const mapDispatchToProps = dispatch => ({
    requestAllCampgrounds: () => dispatch(requestAllCampgrounds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampgroundIndex);
// connect() connects a React component to slices of the state in the Redux store, and action dispatches to view components.
