import { TestBed } from '@angular/core/testing';
import { ProductPromiseService } from './product-promise.service';


describe('ProductsService', () => {
  let service: ProductPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
