import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInButtonComponent } from '../sign-in-button/sign-in-button.component';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-login',
  imports: [SignInButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = new User();

  constructor(private router: Router, private authService: AuthServiceService) { 
    this.user = new User();
  }

  // ngOnInit() {
  //   this.username = "John";
  // }

  login() {
    const val = this.user;
    console.log(val);
    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    this.router.navigate(['/user-page/users']);
                }
            );
    }
}
}
