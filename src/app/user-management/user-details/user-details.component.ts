import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UserModel } from "../user.model";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  id!: string;
  userSelected: UserModel[] = [];
  user!: UserModel;
  myImgUrl: string = "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0="

  constructor(
    private activeroute: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeroute.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.store.select("user").subscribe((userState) => {
        this.userSelected = userState.users.filter(
          (item) => item.id === this.id
        );
        this.user = this.userSelected[0];
      });
    });
  }

  backToList() {
    this.router.navigate([`user-management`]);
  }
}
