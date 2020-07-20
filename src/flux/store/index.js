import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import { applyMiddleware, compose, createStore } from 'redux';

const rootReducer = createRootReducer();

const enhancer = compose(
    applyMiddleware(thunk)
);

const storeConfig = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }
    return store;
}
export default storeConfig;