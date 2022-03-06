import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/PrendaApi";

function* asyncGetPrendaPorId({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getPrendaPorId, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_PRENDAPORID_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_PRENDAPORID_FAILED,
      message: error.message,
    });
  }
}
function* asyncGetPrendaPorNombre({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getPrendaPorNombre, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_PRENDAPORNOMBRE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_PRENDAPORNOMBRE_FAILED,
      message: error.message,
    });
  }
}


export default function* PrendaSaga() {
  yield takeLatest(actionTypes.GET_PRENDAPORID, asyncGetPrendaPorId);
  yield takeLatest(actionTypes.GET_PRENDAPORNOMBRE, asyncGetPrendaPorNombre);
}