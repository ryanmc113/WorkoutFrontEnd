import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in-button',
  imports: [],
  templateUrl: './sign-in-button.component.html',
  styleUrl: './sign-in-button.component.css'
})
export class SignInButtonComponent implements OnInit {

    @Input() text: string | undefined;
    @Output() signInBtn = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {}

    onClick() {
      this.signInBtn.emit();
    }

    email: string = '';
    password: string = '';

    onSubmit() {
      // Implement your login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Add authentication logic and navigate to the next page upon successful login
    }
}
