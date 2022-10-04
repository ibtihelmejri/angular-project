import { Action } from "@ngrx/store";
import { UserModel } from "../user.model";
import {UserResModel} from "../../communComponents/user_res.model";

export const GET_USERS = "[User management] Users List";
export const ACTION_FAIL = "[User management] Failed to get list";
export const ACTION_SUCCESS = "[User management] Get  list with success";



export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor() {
    console.log('GetUsers***');
    
  }
}

export class ActionFail implements Action {
    readonly type = ACTION_FAIL;
  
    constructor(public payload: string) {}
  }
  
  export class ActionSuccess implements Action {
    readonly type = ACTION_SUCCESS;
  
    constructor(public payload: UserResModel) {}
  }


export type UserActions = GetUsers | ActionFail | ActionSuccess ;
