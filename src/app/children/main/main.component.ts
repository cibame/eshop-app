import { Component } from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isPanelOpen: boolean;

  constructor(private _service: MainService) {
    _service.isPanelOpen$.subscribe(val => this.isPanelOpen = val);
  }

  closePanel(): void {
    this._service.closePanel();
  }
}
