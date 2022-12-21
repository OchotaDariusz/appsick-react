import { combineReducers, createStore } from 'redux';
import loginModalReducer from './ducks/loginModal';

const reducer = combineReducers({
    loginModal: loginModalReducer
});

const store = createStore(
    reducer
);

export default store;