import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { WorkoutGeneratorService } from '../../services/workout-generator.service';
import { WorkoutGenerator } from '../../model/workout-generator';


@Component({
  selector: 'app-workout-generator',
  imports: [FormsModule, RouterLink],
  templateUrl: './workout-generator.component.html',
  styleUrl: './workout-generator.component.css'
})
export class WorkoutGeneratorComponent {
  @ViewChild('container') container!: ElementRef;
  workoutGen: WorkoutGenerator = new WorkoutGenerator();

  constructor(private renderer: Renderer2, 
              private el: ElementRef, 
              private router: Router, 
              private workoutGenService: WorkoutGeneratorService) {}


  generateWorkout() {
    const val = this.workoutGen;
    // if (val.length) {
    //     this.workoutGenService
    //         .subscribe(
    //             () => {
    //                 this.router.navigate(['/dashboard']);
    //             }
    //         );
    // }
  }

  appendDivCopy() {
    // Find the original div we want to copy
    const originalDiv = this.container.nativeElement.querySelector('.original-div');
    
    // Create a new div element
    const copiedDiv = this.renderer.createElement('div');
    
    // Copy the contents of the original div to the new one
    this.renderer.setProperty(copiedDiv, 'innerHTML', originalDiv.innerHTML);
    
    // Optionally, add a class to the new div to identify it
    this.renderer.addClass(copiedDiv, 'copied-div');

    // Append the copied div to the container
    this.renderer.appendChild(this.container.nativeElement, copiedDiv);
  }

}
