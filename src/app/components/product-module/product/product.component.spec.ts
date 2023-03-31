import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterStub } from 'src/app/testing-helpers';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell ROUTER to navigate when product clicked',

    inject([Router], (router: Router) => {
      const navigateByUrlSpy = spyOn(router, 'navigateByUrl');

      /**
       *  1. запускаем клик на первом внутреннем <div class="product">
       *  2. получаем аргументы переданные router.navigateByUrl()
       *  3. строим урл для сравнения
       */
      const navArgs = navigateByUrlSpy.calls.first().args[0];

      expect(navArgs).toBe(`/home`, 'should nav to ProductDetail for first product'
      );
    }
  ));
});
