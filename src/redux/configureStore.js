import loginModalReducer from './ducks/loginModal';
import registerModalReducer from './ducks/registerModal';

const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
        reducer: {
            loginModal: loginModalReducer,
            registerModal: registerModalReducer
        }
    }
);

export default store;