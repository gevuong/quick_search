import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}
// configureStore is used to apply preloadedState and middleware
const configureStore = () => (
    createStore(rootReducer, applyMiddleware(...middlewares))
);

export default configureStore;
