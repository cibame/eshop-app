import { Inject, Injectable } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';
import { WINDOW } from './window.provider';

@Injectable({
  providedIn: 'root',
})
export class ScrollerService {
  private scrollIntoViewOptions = { behavior: 'smooth', block: 'start', inline: 'nearest' };
  private scrollToOptions = { top: 0, left: 0, behavior: 'smooth' };

  // public $scroll: Subject<Event> = new Subject<Event>();

  constructor(@Inject(WINDOW) private _window: Window) {
    smoothscroll.polyfill();
  }

  get window(): Window {
    return this._window;
  }

  scrollToElement(element, options?): void {
    element.scrollIntoView(options ? options : this.scrollIntoViewOptions);
  }

  scrollToTop(behavior: 'smooth' | 'auto' = 'smooth'): void {
    this._window.scrollTo({ ...this.scrollToOptions, behavior });
  }
}
