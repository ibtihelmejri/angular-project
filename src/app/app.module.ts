import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
// import { SignupComponent } from './signup/signup.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserItemComponent } from './user-management/user-list/user-item/user-item.component';
// import { LoadingSpinnerComponent } from './communComponents/loading-spinner/loading-spinner.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './communComponents/shared.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    // SignupComponent,
    UserManagementComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent,
    // LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    SharedModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
