import { TestBed } from '@angular/core/testing';

import { ProductPromiseService } from './product-promise.service';

describe('ProductPromiseService', () => {
  let service: ProductPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
