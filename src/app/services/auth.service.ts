import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData {
  token: string
}

export interface SignupResponseData {id: number, token: string}


@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  
  signup(email: string, password: string) {
   return this.http.post<SignupResponseData>("https://reqres.in/api/register", {
      email: email,
      password: password,
    })
    .pipe(catchError(this.handleError))
  }

  onLogin(email: string, password: string) {
    return this.http.post<AuthResponseData>("https://reqres.in/api/login", {
       email: email,
       password: password,
     })
     .pipe(catchError(this.handleError))
   }


   private handleError(errorRes: HttpErrorResponse) {
    // let errorMessage = 'An unknown error occurred!';
    // if (!errorRes.error || !errorRes.error.error) {
    //   return throwError(errorMessage);
    // }
    // switch (errorRes.error.error.message) {
    //   case 'EMAIL_EXISTS':
    //     errorMessage = 'This email exists already';
    //     break;
    //   case 'EMAIL_NOT_FOUND':
    //     errorMessage = 'This email does not exist.';
    //     break;
    //   case 'INVALID_PASSWORD':
    //     errorMessage = 'This password is not correct.';
    //     break;
    // }
    // return throwError(errorMessage);

    let errorMessage = 'Une erreur est survenue, merci de réessayer plus tard'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    
    switch(errorRes.error.error){
      case 'user not found':
        errorMessage = ` Utilisateur non trouvé. Merci de taper l'adresse mail suivante: eve.holt@reqres.in `;
        break;
        case 'Note: Only defined users succeed registration':
          errorMessage ="Remarque : Seuls les utilisateurs définis réussissent l'enregistrement"
          break;
      } 
     
     return throwError (errorMessage)
  }
}
