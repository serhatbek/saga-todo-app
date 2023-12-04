import {
  storeDataInLocalStorage,
  storedTodoData,
} from '../../utils/localStorage';
import actions from './actions';

const initialState = {
  allTodoItems: storedTodoData ? JSON.parse(storedTodoData) : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO_SAGA: {
      const updatedAllTodoList = [...state.allTodoItems, action.payload];
      storeDataInLocalStorage(updatedAllTodoList);
      return {
        ...state,
        allTodoItems: updatedAllTodoList,
      };
    }

    case actions.EDIT_TODO_SAGA: {
      const updatedAllTodoList = [
        ...state.allTodoItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      ];
      storeDataInLocalStorage(updatedAllTodoList);
      return {
        ...state,
        allTodoItems: updatedAllTodoList,
      };
    }

    case actions.DELETE_TODO_SAGA: {
      const updatedAllTodoList = [
        ...state.allTodoItems.filter((item) => item.id !== action.payload),
      ];
      storeDataInLocalStorage(updatedAllTodoList);
      return {
        ...state,
        allTodoItems: updatedAllTodoList,
      };
    }

    case actions.DELETE_ALL_TODO_SAGA: {
      const updatedAllTodoList = [];
      storeDataInLocalStorage(updatedAllTodoList);
      return {
        ...state,
        allTodoItems: updatedAllTodoList,
      };
    }

    default:
      return state;
  }
};

export default reducer;
