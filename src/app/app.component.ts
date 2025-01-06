import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignInButtonComponent } from './components/sign-in-button/sign-in-button.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    LoginComponent, 
    SignInButtonComponent, 
    HeaderComponent, 
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'WorkoutFrontEnd';
  
}
