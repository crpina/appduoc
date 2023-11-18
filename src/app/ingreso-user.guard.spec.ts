import { TestBed } from '@angular/core/testing';

import { IngresoUserGuard } from './ingreso-user.guard';

describe('IngresoUserGuard', () => {
  let guard: IngresoUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresoUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
