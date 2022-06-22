import { combineReducers } from "redux";

// users
import Users from './users/reducer';

// apply
import Apply from './apply/reducer'

// positions
import Positions from './positions/reducer'

const rootReducer = combineReducers({Users, Apply, Positions})

export default rootReducer