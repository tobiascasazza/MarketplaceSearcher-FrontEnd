import * as types from "../consts/actionTypes";
let initialState = {
  prenda: {},
  resultadoPrendaPorId: undefined,
  resultadoPrendaPorNombre: undefined,
};

export function prendaReducers(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRENDAPORID_SUCCESS:
      return { ...state, prenda: action.response };
      break;
    case types.GET_PRENDAPORID_FAILED:
      return { ...state, prenda: action.response };
      break;
    case types.GET_PRENDAPORNOMBRE_SUCCESS:
      return { ...state, prenda: action.response };
      break;
    case types.GET_PRENDAPORNOMBRE_FAILED:
      return { ...state, prenda: action.response };
      break;
    default:
      return state;
      break;
  }
}
