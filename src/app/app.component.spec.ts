import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './testing-helpers';

let fixture: ComponentFixture<AppComponent>;
let links: RouterLinkStubDirective[];
let linkDes: DebugElement[];

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
        NavbarComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    // Запускаем первоначальную инициализацию и получаем экземпляры директив навигации
    fixture.detectChanges();

    // Находим DebugElements с помощью директивы RouterLinkStubDirective
    // Для поиска можно использовать не только By.css, но и By.directive
    // Также искать можно не только по директиве, но и по компоненту,
    // используя его класс
    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkStubDirective)
    );

    // Получаем экземплры директив с помощью DebugElement инжектора
    // Ангуляр всегда добавляет директивы к инжектору компонента
    links = linkDes.map(
      d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective
    );
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shop');
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(4, 'should have 2 links');
    expect(links[0].linkParams).toBe(
      '/home',
      '1st link should go to Products'
    );
    expect(links[1].linkParams).toBe('/cart', '2nd link should go to About');
  });

  it('can click Products link in template', () => {
    const productLinkDe = linkDes[0];
    const productLink = links[0];

    expect(productLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    productLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(productLink.navigatedTo).toBe('/home');
  });
});
