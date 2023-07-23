import { combineReducers } from "redux";
import navigationReducer from './features/navigationSlice.js';

export const rootReducer = combineReducers({
    navigation: navigationReducer,
})


