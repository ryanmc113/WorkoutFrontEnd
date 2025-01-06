import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInButtonComponent } from '../sign-in-button/sign-in-button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [SignInButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = "John";
  }

  signIn(){
    console.log('line 15')
  }

  onSubmit() {
    this.router.navigate(['/user-page']);
  }
}
