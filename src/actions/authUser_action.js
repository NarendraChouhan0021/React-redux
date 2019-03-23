import * as  actiontypes from "../actions/types"

export function authUser(payload) {
    return { type: actiontypes.AUTH_USER, payload:payload }
  };