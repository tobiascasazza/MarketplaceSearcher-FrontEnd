import * as types from "../consts/actionTypes";
let initialState = {
  clothes: {},
  resultadoClothesById: undefined,
  resultadoClothesByName: undefined,
};

export function clothesReducers(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRENDAPORID_SUCCESS:
      return { ...state, clothes: action.response };
    case types.GET_PRENDAPORID_FAILED:
      return { ...state, clothes: action.response };
    case types.GET_PRENDAPORNOMBRE_SUCCESS:
      return { ...state, clothes: action.response };
    case types.GET_PRENDAPORNOMBRE_FAILED:
      return { ...state, clothes: action.response };
    default:
      return state;
  }
}
