import { UserModel } from "../user.model";
import * as UserActions from "./user.actions";

export interface userState {
  users: UserModel[];
}

const initialState: userState = {
  users: [],
};

export function userReducer(
  state: userState = initialState,
  action: UserActions.UserActions
): userState {
  
  switch (action.type) {
    case UserActions.ACTION_SUCCESS:
            
      return {
        ...state,
        users: action.payload.data,
      };

    default:
      return state;
  }
}
