import * as  actiontypes from "../register/types"

export function registerUser(payload) {
    return { type: actiontypes.REGISTER_USER, payload:payload }
  };