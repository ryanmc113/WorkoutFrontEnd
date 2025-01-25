import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInButtonComponent } from './components/sign-in-button/sign-in-button.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { UserService } from './services/user-service.service';
import { UserPageComponent } from './components/user-page/user-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkoutGeneratorComponent } from './components/workout-generator/workout-generator.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    SignInButtonComponent,
    UserPageComponent,
    UserListComponent,
    UserFormComponent,
    DashboardComponent,
    WorkoutGeneratorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule, // Ensure MatFormFieldModule is imported here
    MatInputModule, // Ensure MatInputModule is imported here
    MatCardModule, // Ensure MatCardModule is imported here
    MatButtonModule, // Ensure MatButtonModule is imported here 
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }