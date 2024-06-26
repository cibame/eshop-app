import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MainService} from '../../main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private SCROLL_TRESHOLD = 100;

  private toggleButton: any;
  private sidebarVisible: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event): void {

  }

  constructor(private _router: Router,
              private _element: ElementRef,
              private _renderer: Renderer2,
              private _mainService: MainService
  ) {
    this.sidebarVisible = false;
    const navbar: HTMLElement = this._element.nativeElement.children[0];
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.sidebarClose();
    });
  }

  ngOnInit(): void {
    const navbar: HTMLElement = this._element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

    this._renderer.listen('window', 'scroll', (event) => {
      const n = window.scrollY;
      if (n > this.SCROLL_TRESHOLD || window.pageYOffset > this.SCROLL_TRESHOLD) {
        // add logic
        navbar.children[0].classList.remove('navbar-transparent');
      } else {
        // remove logic
        navbar.children[0].classList.add('navbar-transparent');
      }
    });
  }

  sidebarOpen(): void {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(() => {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  sidebarClose(): void {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton?.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }

  sidebarToggle(): void {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  togglePanel(): void {
    this._mainService.togglePanel();
  }
}
