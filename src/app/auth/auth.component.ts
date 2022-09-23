import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.authForm?.form);
    const email = this.authForm?.form.value.email;
    const password = this.authForm?.form.value.password;
    this.isLoading = true;
    this.authService.onLogin(email, password).subscribe(
      (resData) => {
        console.log("response authentification", resData);
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log('errorMessage',errorMessage);
        
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
