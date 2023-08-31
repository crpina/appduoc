import { TestBed } from '@angular/core/testing';

import { UserControlerService } from './user-controler.service';

describe('UserControlerService', () => {
  let service: UserControlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserControlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
