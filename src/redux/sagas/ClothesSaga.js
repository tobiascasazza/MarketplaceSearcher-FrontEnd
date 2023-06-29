import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/ClothesApi";

function* asyncGetClothesById({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getClothesById, payload);

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
function* asyncGetClothesByName({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getClothesByName, payload);

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

export default function* ClothesSaga() {
  yield takeLatest(actionTypes.GET_PRENDAPORID, asyncGetClothesById);
  yield takeLatest(actionTypes.GET_PRENDAPORNOMBRE, asyncGetClothesByName);
}
