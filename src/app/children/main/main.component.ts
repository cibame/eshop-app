import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {
  isPanelOpen: boolean;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private _service: MainService) {
    _service.isPanelOpen$
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(val => this.isPanelOpen = val);
  }

  closePanel(): void {
    this._service.closePanel();
  }

  ngOnDestroy(): void {
    this.closePanel();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
