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

  ngOnInit(): void {}

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   // this.authService.signup(email,password).subscribe(resData => {
  //   //   console.log('resData',resData);
  //   // },
  //   // error => {
  //   //   console.log('error', error);
  //   //}
  //   //)
  //   // form.reset();
  // }

  onSubmit(){
    console.log(this.signupForm);
    
  }
}
