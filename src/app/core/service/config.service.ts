import {Injectable} from '@angular/core';

export interface Config {
  homeUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: Config = {
    homeUrl: '/'
  };

  get config(): Config {
    return this._config;
  }

  constructor() {
  }
}
