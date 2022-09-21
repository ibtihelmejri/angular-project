import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { UserManagementComponent } from './user-management/user-management.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/signin', pathMatch:'full'},
  {path:'signin', component: AuthComponent},
  {path:'signup', component: SignupComponent},
  {path:'user-management', component: UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
