import { all, call } from 'redux-saga/effects';
import { categoriesSagas } from './categories/categories.sagas';


export default function* rootSaga() {
  yield all([
    call(categoriesSagas),
 ]);
}
