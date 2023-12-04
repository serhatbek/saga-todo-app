import { all } from 'redux-saga/effects';
import TodoRootSaga from './Todo/sagas';

export default function* rootSaga() {
  yield all([TodoRootSaga()]);
}
