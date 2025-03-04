import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User = new User();

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
      this.user = new User();
  }
  
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/user-page/users']);
  }
}