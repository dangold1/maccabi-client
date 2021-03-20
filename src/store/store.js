import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usersReducer from "./reducers/usersReducer";
// import authReducer from "./reducers/authReducer";
import rootSaga from "./sagas/rootSaga";


const rootReducer = combineReducers({
    users: usersReducer,
    // loginUser: authReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;