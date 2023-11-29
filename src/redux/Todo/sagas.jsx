import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  addTodoSaga,
  deleteAllSaga,
  deleteTodoSaga,
  editTodoSaga,
} from './actions';

export function* onAddTodoSaga({ payload }) {
  yield put(addTodoSaga(payload));
}

export function* onAdd() {
  yield takeLatest('ADD_TODO', onAddTodoSaga);
}

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}

export function* onDelete() {
  yield takeLatest('DELETE_TODO', onDeleteTodoSaga);
}

export function* onEditTodoSaga({ payload }) {
  yield put(editTodoSaga(payload));
}

export function* onEdit() {
  yield takeLatest('EDIT_TODO', onEditTodoSaga);
}

export function* onDeleteAllTodoSaga() {
  yield put(deleteAllSaga());
}

export function* onDeleteAll() {
  yield takeLatest('DELETE_ALL_TODO', onDeleteAllTodoSaga);
}
