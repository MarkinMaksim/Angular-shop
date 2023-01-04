import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  title = 'shop';

  ngAfterViewInit() {
    this.appTitle.nativeElement.title = 'AppTitle'
  }
}
