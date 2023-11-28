import { combineReducers } from 'redux';
import todoReducers from './Todo/reducers';

const reducer = combineReducers({
  allTodoItems: todoReducers,
});

export default reducer;
