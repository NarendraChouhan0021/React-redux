// import { ADD_ARTICLE } from "../constants/action-types";

import * as  actiontypes from "../actions/types"


export default (state = {user:{}}, action) => {
  switch (action.type){
    
    case actiontypes.AUTH_USER:
    return {
      ...state,
     user: action.payload
    };
    default:
          return state;
  }
}