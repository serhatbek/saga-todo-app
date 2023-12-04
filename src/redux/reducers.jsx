import { combineReducers } from 'redux';
import TodoReducers from './Todo/reducers';

export default combineReducers({ Todo: TodoReducers });
