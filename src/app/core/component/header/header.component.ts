import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../service/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  href: string;

  constructor(configService: ConfigService) {
    this.href = configService.config.homeUrl;
  }

  ngOnInit(): void {
  }
}
