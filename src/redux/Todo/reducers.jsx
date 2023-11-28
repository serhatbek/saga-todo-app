import actions from './actions';

const initialState = {
  todoList: [
    {
      id: 1,
      text: 'Kiss Luna',
    },
    {
      id: 2,
      text: 'Hug Luna',
    },
  ],
};

const reducer = (state = initialState, action) => {
  //   console.log('state', state);
  let newTodoList;
  switch (action.type) {
    case actions.ADD_TODO_SAGA:
      newTodoList = [...state];
      newTodoList.push(action.payload);
      return newTodoList;

    case actions.DELETE_TODO_SAGA:
      newTodoList = state.todoList.filter((todo) => todo.id !== action.payload);
      return { ...state, todoList: newTodoList };
    default:
      return state;
  }
};

export default reducer;
