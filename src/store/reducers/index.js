import { combineReducers } from "redux";

import {counter} from "./reducers";

const combinedReducers = combineReducers({
    counter
})

export default combinedReducers