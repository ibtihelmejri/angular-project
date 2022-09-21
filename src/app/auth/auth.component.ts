import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
console.log(form.value);
const email = form.value.email;
const password = form.value.password;
this.authService.signup(email,password).subscribe(resData => {
  console.log('resData',resData);
  
},
error => {
  console.log('error', error);
  
}
)
form.reset();
  }

}
