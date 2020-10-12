import { combineReducers } from 'redux';
import weatherDetailsReducer, { sliceName as weatherDetailsSliceName } from './weatherDetailsReducer';

export default combineReducers({
    [weatherDetailsSliceName]: weatherDetailsReducer
})