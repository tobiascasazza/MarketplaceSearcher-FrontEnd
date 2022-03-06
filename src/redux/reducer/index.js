import { combineReducers } from "redux";

import { prendaReducers } from "./prendaReducers";

const rootReducer = combineReducers({
    prendaReducers: prendaReducers,
});

export default rootReducer;
