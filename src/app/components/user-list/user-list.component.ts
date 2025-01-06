import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user-service.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
