import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, mergeMap } from "rxjs/operators";
import * as UserActions from "./user.actions";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { UserModel } from "../user.model";

export interface UserResponseData {
  page: number;
  per_page: number;
  total: number;
  total_page: number;
  data: UserModel[];
}

export interface AddUserResponseData {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

@Injectable()
export class UserEffects {
  userList = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.GET_USERS),
      mergeMap(() =>
        this.http
          .get<UserResponseData>("https://reqres.in/api/users?page=1")
          .pipe(
            map((data) => new UserActions.ActionSuccess(data)),
            catchError((err) => of(new UserActions.ActionFail("error")))
          )
      )
    )
  );

  addUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.ADD_USER),
      switchMap((userData: UserActions.AddUser) => {
        return this.http
          .post<AddUserResponseData>("https://reqres.in/api/users", {
            name: userData.payload.name,
            job: userData.payload.job,
          })
          .pipe(
            map(
              () => new UserActions.IsSuccess("L'ajout a été effectuée avec succès")
              ),
            catchError((err) => of(new UserActions.ActionFail("error")))
          );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
