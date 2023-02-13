import { Component, type OnInit, type OnDestroy } from '@angular/core';
import { Router, type NavigationExtras } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message!: string;

  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn)
    this.setMessage();
  }

  ngOnDestroy(): void {
    console.log('[takeUntil ngOnDestroy]');
    this.unsubscribe.complete();
  }

  checkLogin(): boolean {
    return this.authService.isLoggedIn;
  }

  onLoginAdmin(): void {
    this.onLogin(true);
  }

  onLogin(isAdmin: boolean = false): void {
    this.message = 'Trying to log in ...';
    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';

          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the product
          this.router.navigate([redirect], navigationExtras);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };
    this.authService
      .login(isAdmin)
      // The TakeUntil subscribes and begins mirroring the source Observable.
      // It also monitors a second Observable that you provide.
      // If this second Observable emits an item or sends a termination notification,
      // the Observable returned by TakeUntil stops mirroring the source Observable and terminates.
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onLogout(): void {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage(): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
