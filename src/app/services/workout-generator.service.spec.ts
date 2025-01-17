import { TestBed } from '@angular/core/testing';

import { WorkoutGeneratorService } from './workout-generator.service';

describe('WorkoutGeneratorService', () => {
  let service: WorkoutGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
