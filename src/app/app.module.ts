import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { UserItemComponent } from './user-management/user-list/user-item/user-item.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './communComponents/shared.module';
import { SignupModule } from './signup/signup.module';
import { appReducer } from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    FormsModule,
    AuthModule,
    SharedModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
