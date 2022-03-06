import { all } from "redux-saga/effects";

import PrendaSaga from "./PrendaSaga";

export default function* rootSaga() {
  yield all([PrendaSaga()]);
}