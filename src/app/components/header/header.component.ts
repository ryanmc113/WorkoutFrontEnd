import { Component,Injectable, PLATFORM_ID, Inject, OnInit  } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { LoginServiceService } from '../../services/login-service.service';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';






@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public userLoggedIn = false; 
  public userSessionLoggedIn = false;

   constructor(@Inject(PLATFORM_ID) private platformId: Object, 
                private loginService: LoginServiceService, 
                private authService: AuthServiceService,
                private cookieService: CookieService) {
                  this.loginService.isLoggedIn.subscribe(loggedIn => {
                    this.userLoggedIn = loggedIn;
                    this.userSessionLoggedIn = loggedIn;
                  });    
                  // console.log(localStorage.getItem('expiresIn'))
  }

  ngOnInit(): void {
    console.log(typeof window);
    if (typeof window !== 'undefined') {
      console.log(this.cookieService.get('jwt_token'))
      if(this.cookieService.get('jwt_token')){
        if(this.cookieService.get('jwt_token')){
          this.userLoggedIn = true;
          this.userSessionLoggedIn =
          this.authService.isLoggedIn();
        }
      }
      console.log('before party')
      console.log(this.cookieService.get('jwt_token'))
      console.log('party')
    }
  }

  


}
