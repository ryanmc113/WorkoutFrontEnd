import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateBlogService {
  private url: string;

  constructor(private http: HttpClient) { 
      this.url = 'http://localhost:8080/blog';
    }
  
    saveBlog(blogForm: any) {
      console.log('Blog saved:', blogForm);
  
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No auth token found!');
      }
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'  
      });
  
      return this.http.post<any>(this.url+'/save', blogForm , { headers })
        .pipe(
          tap(res => {
            console.log(res);
          }),
          shareReplay()
        );
    }
}
