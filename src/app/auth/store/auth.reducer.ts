import { AuthToken } from "src/app/communComponents/auth.model";
import * as AuthActions from "./auth.actions";


export interface authState{
  authToken: AuthToken;
}

const initialState: authState = {
  authToken: {token:''}
};



export function authReducer (state : authState = initialState, action: AuthActions.OnLogin): authState {
    switch (action.type) {
      case AuthActions.LOGIN:
        return {
          ...state,
          authToken: action.payload
          };}
    }
   