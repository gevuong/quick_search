import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// thunks are used for async actions, i.e. API calls or router transitions
// configureStore is used to apply preloadedState and middleware
const configureStore = () => (
    createStore(rootReducer, applyMiddleware(thunk, logger))
);

export default configureStore;
