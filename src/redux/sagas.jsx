import { all, call } from 'redux-saga/effects';
import { onDelete } from './Todo/sagas';

export default function* rootSaga() {
  yield all([call(onDelete)]);
}
