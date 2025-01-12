import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../services/auth-service.service';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   userLoggedIn = false;

   constructor(private authService: AuthServiceService) {
    this.userLoggedIn = this.authService.isLoggedIn();
  }

}
