import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  error = null;

  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.fetchUsers().subscribe(
      users => {
        console.log('in component------ ', users);
        
      },
      error => {
        this.error = error.message;
      }
    );
  }

}
