import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth/auth.service";

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

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm?.form);
    const email = this.signupForm?.form.value.email;
    const password = this.signupForm?.form.value.password;
    this.authService.signup(email, password).subscribe(
      (resData) => {
        console.log("resData", resData);
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 4000);
      },
      (error) => {
        console.log("error", error);
        this.isFailed = true;
        setTimeout(() => {
          this.isFailed = false;
        }, 6000);
      }
    );
    this.signupForm?.reset();
  }
}
