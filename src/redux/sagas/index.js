import { all } from "redux-saga/effects";

import ClothesSaga from "./ClothesSaga";

export default function* rootSaga() {
  yield all([ClothesSaga()]);
}
