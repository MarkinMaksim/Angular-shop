import { Injectable } from '@angular/core';
import { ConfigModel } from '../components/models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private _config: ConfigModel = {
    id: 0,
    email: '',
    login: ''
  };

  get config() {
    return this._config;
  }

  setConfig(id: number, login: string, email: string) {
    if (email && email.length > 0) {
      this._config.email = email
    }

    if (login && login.length > 0) {
      this._config.login = email
    }

    if (id) {
      this._config.id = id;
    }
  } 

  setConfigProperty<K extends keyof ConfigModel>(key: K, value: ConfigModel[K]) {
    type t = keyof ConfigModel;
    debugger;
    this._config[key] = value;
  }
}
