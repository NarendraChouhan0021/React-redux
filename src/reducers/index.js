import { combineReducers } from 'redux';
import authUser_reducer from './authUser_reducer'
import register_reducer from './register/registerUser_reducer'
export default combineReducers({
    authUser_StateObj: authUser_reducer,
    register_StateObj: register_reducer
});

