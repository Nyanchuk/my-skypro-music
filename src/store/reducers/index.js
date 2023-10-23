import { combineReducers } from 'redux'
import playerReducer from './playerReducer.js';

const rootReducer = combineReducers({
  player: playerReducer
});

export default rootReducer;