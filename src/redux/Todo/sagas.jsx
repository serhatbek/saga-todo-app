import { takeLatest, put, all, call } from 'redux-saga/effects';
import { deleteTodoSaga } from './actions';

export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}

export function* onDelete() {
  yield takeLatest('DELETE_TODO', onDeleteTodoSaga);
}
