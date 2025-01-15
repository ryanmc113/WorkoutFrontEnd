import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutGeneratorComponent } from './workout-generator.component';

describe('WorkoutGeneratorComponent', () => {
  let component: WorkoutGeneratorComponent;
  let fixture: ComponentFixture<WorkoutGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
