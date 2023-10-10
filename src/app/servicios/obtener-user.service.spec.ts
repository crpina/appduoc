import { TestBed } from '@angular/core/testing';

import { ObtenerUserService } from './obtener-user.service';

describe('ObtenerUserService', () => {
  let service: ObtenerUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
