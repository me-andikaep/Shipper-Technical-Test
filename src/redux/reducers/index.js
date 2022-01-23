import { combineReducers } from 'redux';

import { driverReducer } from './driver/driverReducer';

//combine reducers
export default combineReducers({
	driver: driverReducer,
});
