import { Component,Injectable, PLATFORM_ID, Inject, OnInit  } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { LoginServiceService } from '../../services/login-service.service';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { BehaviorSubject } from 'rxjs';





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
                private loginService: LoginServiceService, private authService: AuthServiceService) {
                  this.loginService.isLoggedIn.subscribe(loggedIn => {
                    this.userLoggedIn = loggedIn;
                    this.userSessionLoggedIn = loggedIn;
                  });    
                  // console.log(localStorage.getItem('expiresIn'))
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.userSessionLoggedIn = localStorage.getItem('expiresIn') ? true : false;
      console.log(localStorage.getItem('expiresIn'))
    }
  }

  


}
