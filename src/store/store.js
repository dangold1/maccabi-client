import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import rootSaga from "./sagas/rootSaga";


const rootReducer = combineReducers({
    usersReducer,
    authReducer
})

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
    rootReducer,
    enhancer
);

sagaMiddleware.run(rootSaga);

export default store;