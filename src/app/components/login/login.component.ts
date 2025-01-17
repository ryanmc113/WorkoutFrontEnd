import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInButtonComponent } from '../sign-in-button/sign-in-button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-login',
  imports: [SignInButtonComponent, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = new User();

  constructor(private router: Router, private authService: AuthServiceService) { 
    this.user = new User();
  }


  login() {
    const val = this.user;
    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    this.router.navigate(['/dashboard']);
                }
            );
    }
  }
}
