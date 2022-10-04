import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./user-management/user-details/user-details.component";
import { UserManagementComponent } from "./user-management/user-management.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/signin", pathMatch: "full" },
  {
    path: "signin",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupModule),
  },
  {
    path: "user-management",
    loadChildren: () =>
      import("./user-management/user.module").then((m) => m.UserModule),
  },
  // { path: "user-management", component: UserManagementComponent },
  // { path: "user-management/detail", component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
