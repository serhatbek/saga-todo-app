const actions = {
  ADD_TODO: 'ADD_TODO',
  ADD_TODO_SAGA: 'ADD_TODO_SAGA',
  DELETE_TODO: 'DELETE_TODO',
  DELETE_TODO_SAGA: 'DELETE_TODO_SAGA',
};

export default actions;

export const addTodo = (todo) => ({
  type: actions.ADD_TODO,
  payload: todo,
});

export const addTodoSaga = (todo) => ({
  type: actions.ADD_TODO_SAGA,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: actions.DELETE_TODO,
  payload: id,
});

export const deleteTodoSaga = (id) => ({
  type: actions.DELETE_TODO_SAGA,
  payload: id,
});
