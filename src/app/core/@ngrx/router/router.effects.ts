import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, createEffect, EffectConfig, ofType } from '@ngrx/effects';
import { config, tap } from 'rxjs';
import * as RouterActions from './router.actions';
const effectConfig: EffectConfig = {
  dispatch: false
};

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) { }
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.go),
        tap(action => {
          const { type: deleted, path, queryParams, extras } = { ...action };
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
      { dispatch: false}
  );
  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back())
      ),
      { dispatch: false}
  );
  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.forward())
      ),
      { dispatch: false}
  );
}