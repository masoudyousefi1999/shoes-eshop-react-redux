import { legacy_createStore, combineReducers } from "redux";
import {counterReducer} from "./counterReducer";
import {bagReducer} from "./bagReducer";
import { productReducer } from "./shoesReducer";
import { shopingCartReducer } from "./shopingCartReducer";

const store = legacy_createStore(combineReducers({
    counter : counterReducer,
    bag : bagReducer,
    shoes : productReducer,
    cart : shopingCartReducer,
}))

export default store