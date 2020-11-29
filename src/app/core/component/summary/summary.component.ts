import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../cart/model/cart-item.model';
import {OrderItem} from '../../model/order.model';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() value = 0;
  @Input() cartItems: CartItem<Product>[] = [];
  @Input() orderItems: OrderItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
