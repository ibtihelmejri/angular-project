import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  @ViewChild("signupForm") signupForm: NgForm | undefined;
  constructor(private authService: AuthService) {}
  isSuccess = false;
  isFailed = false;
  isLoading = false;
  error: string = "";

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm?.form);
    this.isLoading = true;
    const email = this.signupForm?.form.value.email;
    const password = this.signupForm?.form.value.password;
    this.authService.signup(email, password).subscribe(
      (resData) => {
        console.log("resData", resData);
        this.isLoading = false;
        this.isSuccess = true;

        setTimeout(() => {
          this.isSuccess = false;
        }, 4000);
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
    this.signupForm?.reset();
  }
}
