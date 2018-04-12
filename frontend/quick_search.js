// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Components and store
import Root from './components/root';
import configureStore from './store/store';

// Uncomment the following for testing purposes only:
// import { receiveAllCampgrounds, requestAllCampgrounds } from './actions/thing_actions';
// import { fetchAllCampgrounds } from './util/thing_api_util';

// defensive programming allows bundle.js script tag to be placed elsewhere in index.html. Browser loads JS code, but waits until DOM Content is parsed and loaded before running JS code against it.
document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const rootEl = document.getElementById("root");
    ReactDOM.render(<Root store={ store } />, rootEl);

    // Uncomment the following for testing purposes only:
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.requestAllCampgrounds = requestAllCampgrounds;
    // window.receiveAllCampgrounds = receiveAllCampgrounds;
    // window.fetchAllCampgrounds = fetchAllCampgrounds;

    // fetchAllThings().then(
    //     things => dispatch(receiveFetchedThings(things))
    // );
});
