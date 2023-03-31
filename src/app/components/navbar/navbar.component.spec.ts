import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective } from 'src/app/testing-helpers';

import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent, RouterLinkStubDirective ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Находим DebugElements с помощью директивы RouterLinkStubDirective
    // Для поиска можно использовать не только By.css, но и By.directive
    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkStubDirective)
    );

    // Получаем экземплры директив с помощью DebugElement инджектора
    // Ангуляр всегда добавляет директивы к инджектору компонента
    links = linkDes.map(
      d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective
    );

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(4, 'should have 4 links');
    expect(links[0].linkParams).toBe(
      '/home',
      '1st link should go to home'
    );
    expect(links[1].linkParams).toBe('/cart', '2nd link should go to Cart');
    expect(links[2].linkParams).toBe('/admin', '3d link should go to Admin');
    expect(links[3].linkParams).toBe('/login', '4th link should go to Login');
  });

  it('can click Home link in template', () => {
    const homeLinkDe = linkDes[0];
    const homeLink = links[0];

    expect(homeLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(homeLink.navigatedTo).toBe('/home');
  });

  it('can click Cart link in template', () => {
    const cartLinkDe = linkDes[1];
    const cartLink = links[1];

    expect(cartLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    cartLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(cartLink.navigatedTo).toBe('/cart');
  });

  it('can click Admin link in template', () => {
    const adminLinkDe = linkDes[2];
    const adminLink = links[2];

    expect(adminLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    adminLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(adminLink.navigatedTo).toBe('/admin');
  });

  it('can click Login link in template', () => {
    const loginLinkDe = linkDes[3];
    const loginLink = links[3];

    expect(loginLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    loginLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(loginLink.navigatedTo).toBe('/login');
  });
});
