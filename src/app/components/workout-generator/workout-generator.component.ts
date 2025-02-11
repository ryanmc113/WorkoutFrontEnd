import { Component, Renderer2, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormArray, Validators, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { WorkoutGeneratorService } from '../../services/workout-generator.service';
import { WorkoutGenerator } from '../../model/workout-generator';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { min } from 'moment';


@Component({
  selector: 'app-workout-generator',
  imports: [FormsModule, 
            RouterLink, 
            CommonModule, 
            ReactiveFormsModule, 
            MatFormFieldModule, 
            MatSelectModule, 
            MatOptionModule, 
            MatIconModule,
            MatInputModule],
  templateUrl: './workout-generator.component.html',
  styleUrl: './workout-generator.component.css'
})
export class WorkoutGeneratorComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  // form: FormGroup;
  myForm: FormGroup;


  constructor(private renderer: Renderer2, 
              private el: ElementRef, 
              private router: Router, 
              private workoutGenService: WorkoutGeneratorService,
              private fb: FormBuilder) {

                // this.form = this.fb.group({
                //   exercises: this.fb.array([])
                // });
                this.myForm = this.fb.group({
                  names: this.fb.array([])
                });
    }

    ngOnInit() {
      // this.addExercise(); // Add an initial lesson to the form array
      this.myForm = this.fb.group({
        names: this.fb.array([])
      });
    }
  

  //   get exercises() {
  //     return this.form.controls["exercises"] as FormArray;
  //   }

  //   addExercise() {
  //     const exerciseForm = this.fb.group({
  //         name: ['', Validators.required],
  //         type: ['', Validators.required]
  //     });
    
  //     this.exercises.push(exerciseForm);
  //   }

  //   deleteExercise(lessonIndex: number) {
  //     this.exercises.removeAt(lessonIndex);
  //  }

    ngAfterViewInit() {
      // Access the nativeElement here
      if (this.container) {
        const nativeElement = this.container.nativeElement;
        // Perform operations on the nativeElement
      }
    }

  //   Workout = {
  //     id: 0,
  //     date: new Date(),
  //     time: new Date().getTime(),
  //     hours: 1,
  //     minutes: 32,
  //     seconds: 33,
  //     comment: 'this is being sent',
  //     workoutExercises: []
  //   }

    onSubmit() {
      // console.log(this.form.value);
      // this.Workout.workoutExercises = this.form.value.exercises;
      // console.log(this.Workout);
      // if (this.form.valid) {
      //   this.workoutGenService.generateWorkout(this.Workout).subscribe(
      //     response => {
      //       console.log('Workout generated:', response);
      //     },
      //     error => {
      //       console.error('Error generating workout:', error);
      //     });

        
      // }
    }

  get names() {
    return (this.myForm.get('names') as FormArray);
  }

  addName() {
    this.names.push(this.fb.control(''));
  }

  removeName(index: number) {
    this.names.removeAt(index);
  }
}
