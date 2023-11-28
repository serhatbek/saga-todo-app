import { takeLatest, put, all, call } from 'redux-saga/effects';
import { addTodoSaga, deleteTodoSaga } from './actions';

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
