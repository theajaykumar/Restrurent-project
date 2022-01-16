import { combineReducers } from "redux";
// import filter_name from "./filterreducer";
import tablereducer from "./tablereducer";
import filterreducer from './filterreducer';
import orderreducer from "./orderreducer";

const reducer = combineReducers({
    tablereducer:tablereducer,
    filterreducer: filterreducer,
    orderreducer:orderreducer
})

export default reducer;