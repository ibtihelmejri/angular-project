import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, mergeMap } from "rxjs/operators";
import * as UserActions from "./user.actions";
import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { UserResModel } from "src/app/communComponents/user_res.model";
import {UserModel } from "../user.model"


export interface UserResponseData {
     page: number;
     per_page: number;
     total: number;
     total_page: number;
     data: UserModel[];
  }
  


@Injectable()
export class UserEffects {
userList = createEffect(() =>
  
  this.actions$.pipe(
    ofType(UserActions.GET_USERS),
    mergeMap(() => this.http.get<UserResponseData>('https://reqres.in/api/users?page=1')
      .pipe(
        map((data) => new UserActions.ActionSuccess(data)),
        catchError((err) => of (new UserActions.ActionFail('error')))
      ))
    ));


  constructor(private actions$: Actions, private http: HttpClient) {
    
  }
}


