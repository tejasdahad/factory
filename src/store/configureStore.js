import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import directorReducer from '../reducers/directorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            directors: directorReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
