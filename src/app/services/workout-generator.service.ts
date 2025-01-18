import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkoutGenerator } from '../model/workout-generator';
import { tap, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WorkoutGeneratorService {
  private url: string;


  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8080/workout';
  }

    generateWorkout(WorkoutGenerator: WorkoutGenerator) {
      console.log(WorkoutGenerator);
        return this.http.post<WorkoutGenerator[]>(this.url+'/generate', WorkoutGenerator)
        .pipe(
          tap(res => {
            console.log(res);
          }),
          shareReplay()
        );
    }
}

