import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import * as AuthActions from "./auth.actions";
import { Injectable } from '@angular/core';
import { of } from "rxjs";

export interface AuthResponseData {
  token: string;
}

  @Injectable()
export class AuthEffects {


  authLogin = createEffect (()=>
  this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>("https://reqres.in/api/login", {
        email: authData.payload.email,
        password: authData.payload.password,
      })
      .pipe(
        map(resData => {
          
          return new AuthActions.OnLogin({
            token: resData.token
          });
        }),
        catchError(errorRes => {
          console.log('!errorRes.error',errorRes);
          
          
          let errorMessage = "Une erreur est survenue, merci de réessayer plus tard";
          if (!errorRes.error || !errorRes.error.error) {
            return of(new AuthActions.LoginFail(errorMessage));

          }
      
          switch (errorRes.error.error) {
            case "user not found":
              errorMessage = ` Utilisateur non trouvé. Merci de taper l'adresse mail suivante: eve.holt@reqres.in `;
              break;
            case "Note: Only defined users succeed registration":
              errorMessage =
                "Remarque : Seuls les utilisateurs définis réussissent l'enregistrement";
              break;
          }
      
          return of(new AuthActions.LoginFail(errorMessage));
        })
      )
    })
  )

  // this.actions$.pipe(
  //   ofType(AuthActions.LOGIN_START),
  //   switchMap((authData: AuthActions.LoginStart) => {
  //     return this.http
  //       .post<AuthResponseData>(
  //         'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
  //           environment.firebaseAPIKey,
  //         {
  //           email: authData.payload.email,
  //           password: authData.payload.password,
  //           returnSecureToken: true
  //         }
  //       )
  //       .pipe(
  //         map(resData => {
  //           const expirationDate = new Date(
  //             new Date().getTime() + +resData.expiresIn * 1000
  //           );
  //           return new AuthActions.Login({
  //             email: resData.email,
  //             userId: resData.localId,
  //             token: resData.idToken,
  //             expirationDate: expirationDate
  //           });
  //         }),
  //         catchError(errorRes => {
  //           let errorMessage = 'An unknown error occurred!';
  //           if (!errorRes.error || !errorRes.error.error) {
  //             return of(new AuthActions.LoginFail(errorMessage));
  //           }
  //           switch (errorRes.error.error.message) {
  //             case 'EMAIL_EXISTS':
  //               errorMessage = 'This email exists already';
  //               break;
  //             case 'EMAIL_NOT_FOUND':
  //               errorMessage = 'This email does not exist.';
  //               break;
  //             case 'INVALID_PASSWORD':
  //               errorMessage = 'This password is not correct.';
  //               break;
  //           }
  //           return of(new AuthActions.LoginFail(errorMessage));
  //         })
  //       );
  //   })
  // );


  )
  
  // this.actions$.pipe(
  //   ofType(AuthActions.LOGIN_START),
  //   switchMap((authData: AuthActions.LoginStart) => {
  //     return this.http.post<AuthResponseData>("https://reqres.in/api/login", {
  //       email: authData.payload.email,
  //       password: authData.payload.password,
  //     });
  //   })
  // );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
