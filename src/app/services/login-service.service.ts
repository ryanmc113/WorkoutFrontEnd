import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private usersUrl: string;
  user: User = new User();

  constructor(private http: HttpClient, private authService: AuthServiceService, private router: Router) {
    this.user = new User();
    this.usersUrl = 'http://localhost:8080/users';
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
