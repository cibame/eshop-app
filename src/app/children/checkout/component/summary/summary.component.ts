import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '../../../../core/cart/model/cart-item.model';
import {Product} from '../../../../core/model/product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() value = 0;
  @Input() cartItems: CartItem<Product>[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
