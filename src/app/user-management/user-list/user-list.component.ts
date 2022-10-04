import { Component, OnInit } from "@angular/core";
import { UserModel } from "../user.model";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select("user").subscribe((userState) => {
      this.users = userState.users;
    });
  }

  onUserSelected(user: UserModel) {
    this.router.navigate([`user-management/${user.id}/details`]);
  }
}
