import { combineReducers } from 'redux'; 
import dataSlice from '../../slices/dataSlice';
import iuSlice from '../../slices/uiSlice'
const rootReducer = combineReducers({
    data: dataSlice,
    ui: iuSlice,
});

export default rootReducer;
