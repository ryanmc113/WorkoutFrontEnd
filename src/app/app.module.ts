import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInButtonComponent } from './components/sign-in-button/sign-in-button.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './services/user-service.service';
import { UserPageComponent } from './components/user-page/user-page.component';


@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    SignInButtonComponent,
    UserPageComponent,
    UserListComponent,
    UserFormComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, // Ensure FormsModule is imported here
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }