import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ScrollerService} from './core/service/scroller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(router: Router,
              scroller: ScrollerService) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe((event: NavigationEnd) => scroller.scrollToTop());
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
