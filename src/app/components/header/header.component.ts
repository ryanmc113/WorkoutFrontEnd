import { Component,Injectable, PLATFORM_ID, Inject  } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { LoginServiceService } from '../../services/login-service.service';




@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   userLoggedIn = false;

   constructor(@Inject(PLATFORM_ID) private platformId: Object, 
                private loginService: LoginServiceService) {
                  this.loginService.isLoggedIn.subscribe(loggedIn => {
                    this.userLoggedIn = loggedIn;
                  });    
  }

  // ngOnInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.userLoggedIn = this.authService.isLoggedIn();
  //   }
  // }

}
