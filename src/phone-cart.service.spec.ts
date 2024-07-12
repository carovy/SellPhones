import { TestBed } from '@angular/core/testing';

import { PhoneCartService } from './phone-cart.service';

describe('PhoneCartService', () => {
  let service: PhoneCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
