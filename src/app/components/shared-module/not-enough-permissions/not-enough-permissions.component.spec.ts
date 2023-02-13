import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEnoughPermissionsComponent } from './not-enough-permissions.component';

describe('NotEnoughPermissionsComponent', () => {
  let component: NotEnoughPermissionsComponent;
  let fixture: ComponentFixture<NotEnoughPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotEnoughPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotEnoughPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
