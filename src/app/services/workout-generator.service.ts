import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkoutGenerator } from '../model/workout-generator';
import { tap, shareReplay } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import { Observable, pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WorkoutGeneratorService {
  private url: string;


  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8080/workout';
  }

    generateWorkout(workoutExercises: any) {

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No auth token found!');
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'  
      });

      return this.http.post<any>(this.url+'/generate', workoutExercises , { headers })
        .pipe(
          tap(res => {
            console.log(res);
          }),
          shareReplay()
        );
    }

    // generateWorkout(workout: WorkoutGenerator): Observable<any> {
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //   return this.http.post<any>(this.url+'/generate', workout, { headers });
    // }

}

