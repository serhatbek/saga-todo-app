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
  switch (action.type) {
    case actions.SET_TODO: {
      return { ...state, todoList: action.payload };
    }

    case actions.SET_DELETE_TODO: {
      return { ...state, todoList: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
