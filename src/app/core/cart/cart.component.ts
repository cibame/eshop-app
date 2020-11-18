import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count: number;

  constructor(public _cartService: CartService) {
    this.count = _cartService.count;
  }

  ngOnInit(): void {
  }

}
