import { Action } from "@ngrx/store";
import { Auth } from "src/app/communComponents/auth.model";

export const LOGIN = "LOGIN";

export class OnLogin implements Action {
  readonly type = LOGIN;

  constructor(public payload: Auth) {}
}
