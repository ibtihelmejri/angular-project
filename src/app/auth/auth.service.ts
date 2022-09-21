import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}
  
  signup(email: string, password: string) {
   return this.http.post("https://reqres.in/api/register", {
      email: email,
      password: password,
    });
  }
}
