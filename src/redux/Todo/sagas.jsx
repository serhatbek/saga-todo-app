import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';

const addTodoSaga = (todo) => ({
  type: actions.ADD_TODO_SAGA,
  payload: todo,
});

const deleteTodoSaga = (id) => ({
  type: actions.DELETE_TODO_SAGA,
  payload: id,
});

const editTodoSaga = (todo) => ({
  type: actions.EDIT_TODO_SAGA,
  payload: todo,
});

const deleteAllTodoSaga = () => ({
  type: actions.DELETE_ALL_TODO_SAGA,
});

export function* onAddTodoSaga({ payload }) {
  yield put(addTodoSaga(payload));
}

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}

export function* onEditTodoSaga({ payload }) {
  yield put(editTodoSaga(payload));
}

export function* onDeleteAllTodoSaga() {
  yield put(deleteAllTodoSaga());
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.ADD_TODO, onAddTodoSaga),
    takeEvery(actions.DELETE_TODO, onDeleteTodoSaga),
    takeEvery(actions.EDIT_TODO, onEditTodoSaga),
    takeEvery(actions.DELETE_ALL_TODO, onDeleteAllTodoSaga),
  ]);
}
