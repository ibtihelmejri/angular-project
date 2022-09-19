import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserItemComponent } from './user-management/user-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    UserManagementComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
