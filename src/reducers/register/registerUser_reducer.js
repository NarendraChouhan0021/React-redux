// import { ADD_ARTICLE } from "../constants/action-types";

import * as  actiontypes from "../../actions/register/types"

export default (state = {user:{}}, action) => {
  switch (action.type){
    
    case actiontypes.REGISTER_USER:
    return {
      ...state,
      user: action.payload
    };
    default:
          return state;
  }
}