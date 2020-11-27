import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {CartService} from '../cart.service';
import {CartItem} from '../model/cart-item.model';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  @Input() cartItems: CartItem<Product>[];
  @Input() value: number;

  constructor(private readonly cartService: CartService) {
  }

  ngOnInit(): void {
  }

  remove(cartItem: CartItem<Product>): void {
    this.cartService.remove(cartItem.item);
  }

  increase(cartItem: CartItem<Product>): void {
    this.cartService.changeQuantity(cartItem.item, cartItem.quantity + 1);
  }

  decrease(cartItem: CartItem<Product>): void {
    if (cartItem.quantity <= 1) {
      return;
    }
    this.cartService.changeQuantity(cartItem.item, cartItem.quantity - 1);
  }

}
