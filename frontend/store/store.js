import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// configureStore is used to apply preloadedState and middleware
const configureStore = () => (
    createStore(rootReducer, applyMiddleware(thunk))
);

export default configureStore;
