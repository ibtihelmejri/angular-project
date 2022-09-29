import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
// import * as AuthActions from './store/auth.actions';
//  import * as fromApp from '../store/app.reducer';
import { Store } from "@ngrx/store";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  @ViewChild("authForm") authForm: NgForm | undefined;
  isFailed = false;
  isLoading = false;
  error: string = "";
  constructor(private authService: AuthService, private router: Router, private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.authForm?.form);
    const email = this.authForm?.form.value.email;
    const password = this.authForm?.form.value.password;
    this.isLoading = true;

    // this.store.dispatch(
    //   new AuthActions.LoginStart({ email: email, password: password })
    // );

    this.authService.onLogin(email, password).subscribe(
      (resData) => {
        console.log("response authentification", resData);
        this.isLoading = false;
        this.router.navigate(["/user-management"]);
      },
      (errorMessage) => {
        console.log("errorMessage", errorMessage);

        this.isLoading = false;
        this.isFailed = true;
        setTimeout(() => {
          this.isFailed = false;
        }, 6000);

        this.error = errorMessage;
      }
    );
    this.authForm?.form.reset();
  }
}
