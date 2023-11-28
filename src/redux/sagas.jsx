import { all, call } from 'redux-saga/effects';
import { onAdd, onDelete, onDeleteAll } from './Todo/sagas';

export default function* rootSaga() {
  yield all([call(onDelete), call(onAdd), call(onDeleteAll)]);
}
