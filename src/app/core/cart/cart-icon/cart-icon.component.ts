import {Component, OnInit, Output} from '@angular/core';
import {tap} from 'rxjs/operators';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {

  count: number;

  constructor(cart: CartService) {
    cart.cart$
      .pipe(
        tap(items => console.log(items))
      )
      .subscribe(items => this.count = items.length);
  }

  ngOnInit(): void {
  }

}
