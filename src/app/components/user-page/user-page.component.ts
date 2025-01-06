import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../model/user';
import { UserListComponent } from '../user-list/user-list.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-page',
  imports: [
    RouterOutlet, 
    UserListComponent, 
    UserFormComponent, 
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
