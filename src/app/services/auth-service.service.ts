import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import moment from "moment";
import { tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private usersUrl: string;
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';

  }

  login(email:string, password:string ) {
      return this.http.post<User>(this.usersUrl+'/auth/login', {email, password})
      .pipe(
        tap(res => {
          this.setSession(res);
          this.loggedIn.next(true);
        }),
        shareReplay()
      );
  }
        
  private setSession(authResult: { expiresIn: any; idToken: string; }) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      console.log(typeof localStorage);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
      }

  }          

  // private getSession(): { idToken: string, expiresAt: string } {
  //   const idToken = localStorage.getItem('id_token') || '';
  //   const expiresAt = localStorage.getItem('expires_at') || '';
  
  //   return { idToken, expiresAt };
  // }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
    }
  }

  public isLoggedIn() {
      var a = moment().format();
      return moment(a).isAfter(this.getExpiration());
  }


  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
     var expiresAt = moment().subtract(1, 'days').format();
    if (typeof localStorage !== 'undefined') {
      const expiration = localStorage.getItem("expires_at") || '';
       expiresAt = JSON.parse(expiration);
       return moment(expiresAt);
    }else{
      return expiresAt;
    }
      
  }    
}
