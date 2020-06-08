import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import directorReducer from '../reducers/directorReducer';
import productsReducer from '../reducers/productsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            directors: directorReducer,
            products: productsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
