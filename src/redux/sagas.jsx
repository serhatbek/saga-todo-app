import { all, call } from 'redux-saga/effects';
import { onAdd, onDelete } from './Todo/sagas';

export default function* rootSaga() {
  yield all([call(onDelete), call(onAdd)]);
}
