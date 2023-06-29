import { combineReducers } from "redux";

import { clothesReducers } from "./clothesReducers";

const rootReducer = combineReducers({
  clothesReducers: clothesReducers,
});

export default rootReducer;
