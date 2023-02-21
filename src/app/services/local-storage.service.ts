import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsModel } from '../components/models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private settings!: SettingsModel;

  constructor(private http: HttpClient) {
  }

  public getSettings(): SettingsModel {
    let sortBy = localStorage.getItem('sortBy');
    let isAsc = localStorage.getItem('isAsc')
    
    if (sortBy != null && isAsc != null) {
      this.settings.sortBy = sortBy;
      this.settings.isAsc = !isAsc;
    }

    return this.settings;
  }

  public setSettings(setting: SettingsModel) {
    localStorage.setItem('sortBy', setting.sortBy);
    localStorage.setItem('isAsc', setting.isAsc.toString());
  }
}
