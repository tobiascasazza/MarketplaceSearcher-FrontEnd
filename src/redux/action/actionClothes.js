import * as actionTypes from "../consts/actionTypes";

export function getClothesById(param) {
  return {
    type: actionTypes.GET_PRENDAPORID,
    payload: param,
  };
}
export function getClothesByName(param) {
  return {
    type: actionTypes.GET_PRENDAPORNOMBRE,
    payload: param,
  };
}
