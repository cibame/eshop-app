import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _isPanelOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isPanelOpen$: Observable<boolean> = this._isPanelOpen$.asObservable();

  constructor() {
  }

  openPanel(): void {
    this._isPanelOpen$.next(true);
  }

  closePanel(): void {
    this._isPanelOpen$.next(false);
  }

  togglePanel(): void {
    this._isPanelOpen$.next(!this._isPanelOpen$.value);
  }
}
