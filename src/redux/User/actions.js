import { UserActionTypes } from "./action-types"
export const loginUser = (payload) =>({
        type: UserActionTypes.LOGIN,
        payload
      }
)
export const LogoutUser = (payload) =>({
    type: UserActionTypes.LOGOUT,
    payload
  }
)
