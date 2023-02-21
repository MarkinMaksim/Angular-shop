import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of, retry } from 'rxjs';
import { SettingsModel } from '../components/models/settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private settings!: SettingsModel;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.getJSON().subscribe(data => {
      this.settings = this.settings;
    });
  }

  public getSettings(): Observable<SettingsModel> {
    return this.getJSON().pipe(
      mergeMap(data => {
        if (data.sortBy.length > 0) {
          this.localStorage.setSettings(data)
        } else {
          let defaultSettings = new SettingsModel(false, "name");
          this.localStorage.setSettings(defaultSettings);
        }

        return this.getSettings()
      })
    );
  }

  public getJSON(): Observable<SettingsModel> {
    return this.http.get<SettingsModel>("./assets/app-settings.json").pipe(
      retry(2)
    );
  }
}
