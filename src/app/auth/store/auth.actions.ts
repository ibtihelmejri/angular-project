import { Action } from "@ngrx/store";
import { AuthToken } from "src/app/communComponents/auth.model";

export const LOGIN = "[Auth] Login";

export class OnLogin implements Action {
  readonly type = LOGIN;

  constructor(public payload: AuthToken) {}
}
