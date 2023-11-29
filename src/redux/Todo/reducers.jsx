import { storeDataInLocalStorage } from '../../utils/localStorage';
import actions from './actions';

const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
};

console.log(JSON.parse(localStorage.getItem('todoList')));

const reducer = (state = initialState, action) => {
  let newTodoList;

  switch (action.type) {
    case actions.ADD_TODO_SAGA:
      newTodoList = [...state.todoList, action.payload];
      storeDataInLocalStorage(newTodoList);
      return { ...state, todoList: newTodoList };

    case actions.DELETE_TODO_SAGA:
      newTodoList = state.todoList.filter((todo) => todo.id !== action.payload);
      storeDataInLocalStorage(newTodoList);
      return { ...state, todoList: newTodoList };

    case actions.EDIT_TODO_SAGA:
      newTodoList = state.todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      storeDataInLocalStorage(newTodoList);
      return { ...state, todoList: newTodoList };

    case actions.DELETE_ALL_TODO_SAGA:
      storeDataInLocalStorage([]);
      return { ...state, todoList: [] };
    default:
      return state;
  }
};

export default reducer;
