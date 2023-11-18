import { TestBed } from '@angular/core/testing';

import { NoIngresoUserGuard } from './no-ingreso-user.guard';

describe('NoIngresoUserGuard', () => {
  let guard: NoIngresoUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresoUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
