import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInButtonComponent } from '../sign-in-button/sign-in-button.component';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from '../../model/user';
import { UserService } from '../../services/user-service.service';



@Component({
  selector: 'app-login',
  imports: [SignInButtonComponent, FormsModule, AuthServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  username: string = '';

  user: User = new User();

  constructor(private router: Router, private authService: AuthServiceService, private userService: UserService ) { 
    this.user = new User();
  }

  ngOnInit() {
    this.username = "John";
  }

  signIn(){
    console.log('line 15')
  }

  onSubmit() {
    this.router.navigate(['/user-page']);
  }

  login() {
    const val = this.user;

    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('/');
                }
            );
    }
}
}
