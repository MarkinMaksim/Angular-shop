import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { merge, tap } from 'rxjs';
import * as RouterActions from './core/@ngrx/router/router.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  title = 'shop';

  constructor() {}
  ngAfterViewInit() {
    this.appTitle.nativeElement.title = 'AppTitle'
  }
}


