import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const ua = window.navigator.userAgent;
    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      const v = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      if (v) {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('ie-background');
      }
    }

  }
}
