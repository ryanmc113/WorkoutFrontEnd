import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user: User = new User();
  private userLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  get isLoggedIn() {
    return this.userLoggedIn.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.userLoggedIn.next(value);
  }

    
}
