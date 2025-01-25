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
  form: FormGroup;

  constructor(private renderer: Renderer2, 
              private el: ElementRef, 
              private router: Router, 
              private workoutGenService: WorkoutGeneratorService,
              private fb: FormBuilder) {

                this.form = this.fb.group({
                  exercises: this.fb.array([])
                });
    }

    ngOnInit() {
      this.addExercise(); // Add an initial lesson to the form array
    }
  

    get exercises() {
      return this.form.controls["exercises"] as FormArray;
    }

    addExercise() {
      const exerciseForm = this.fb.group({
          exercise: ['', Validators.required],
          type: ['beginner', Validators.required]
      });
    
      this.exercises.push(exerciseForm);
    }

    deleteExercise(lessonIndex: number) {
      this.exercises.removeAt(lessonIndex);
   }

  ngAfterViewInit() {
    // Access the nativeElement here
    if (this.container) {
      const nativeElement = this.container.nativeElement;
      // Perform operations on the nativeElement
    }
  }

}
