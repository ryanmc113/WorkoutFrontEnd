import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import moment from "moment";
import { tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { LoginServiceService } from './login-service.service';
import { CookieService } from 'ngx-cookie-service';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private usersUrl: string;
  private loggedIn = false


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient, 
    private loginService: LoginServiceService,
    private cookieService: CookieService) {
    this.usersUrl = 'http://localhost:8080';

  }

  login(email:string, password:string ) {
      return this.http.post<User>(this.usersUrl+'/auth/login', {email, password})
      .pipe(
        tap(res => {
          console.log(res);
          const expirationDate = new Date();
          expirationDate.setHours(expirationDate.getHours() + 1); 
          this.cookieService.set('jwt_token', res.token, { expires: expirationDate, path: '/' , secure: true });
          this.setSession(res);
          this.loginService.setLoggedIn(true);
          console.log(this.cookieService.get('jwt_token'));
        }),
        shareReplay()
      );
  }
        
  private setSession(authResult: { expiresIn: any; token: string; }) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('token', authResult.token);
        localStorage.setItem("expiresIn", JSON.stringify(expiresAt.valueOf()) );
      }

  }          

  logout() {
    if (isPlatformBrowser(this.platformId)) {
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
    if (isPlatformBrowser(this.platformId)) {
      const expiration = localStorage.getItem("expires_at") || '';
      expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }else{
        return expiresAt;
    }
      
  }    
}
