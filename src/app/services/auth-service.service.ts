import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import moment from "moment";
import { tap, shareReplay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';

  }

  login(email:string, password:string ) {
      return this.http.post<User>(this.usersUrl+'/auth/login', {email, password})
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      );
  }
        
  private setSession(authResult: { expiresIn: any; idToken: string; }) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  // private getSession(): { idToken: string, expiresAt: string } {
  //   const idToken = localStorage.getItem('id_token') || '';
  //   const expiresAt = localStorage.getItem('expires_at') || '';
  
  //   return { idToken, expiresAt };
  // }

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at") || '';
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }    
}
