import { combineReducers } from "redux";
import notes from './notes';
import users from "./users";

const rootReducer = combineReducers({ notes, users });

export default rootReducer;