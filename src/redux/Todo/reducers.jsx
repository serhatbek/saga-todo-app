import actions from './actions';

const initialState = {
  todoList: [],
};

const reducer = (state = initialState, action) => {
  let newTodoList;

  switch (action.type) {
    case actions.ADD_TODO_SAGA:
      newTodoList = state.todoList.push(action.payload);
      return { ...state, newTodoList };

    case actions.DELETE_TODO_SAGA:
      newTodoList = state.todoList.filter((todo) => todo.id !== action.payload);
      return { ...state, todoList: newTodoList };

    case actions.EDIT_TODO_SAGA:
      newTodoList = state.todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todoList: newTodoList };

    case actions.DELETE_ALL_TODO_SAGA:
      return { ...state, todoList: [] };
    default:
      return state;
  }
};

export default reducer;
