import * as actionTypes from "../consts/actionTypes";

export function getPrendaPorId(param) {
  return {
    type: actionTypes.GET_PRENDAPORID,
    payload: param,
  };
}
export function getPrendaPorNombre(param) {
    return {
      type: actionTypes.GET_PRENDAPORNOMBRE,
      payload: param,
    };
  }