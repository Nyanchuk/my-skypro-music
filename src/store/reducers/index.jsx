import { combineReducers } from 'redux'
import playerReducer from './playerReducer.jsx';

const rootReducer = combineReducers({
  player: playerReducer
});

export default rootReducer;