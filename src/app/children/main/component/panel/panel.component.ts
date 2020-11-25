import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {tap} from 'rxjs/operators';
import {CartService} from '../../../../core/cart/cart.service';
import {CartItem} from '../../../../core/cart/model/cart-item.model';
import {Product} from '../../../../core/model/product.model';
import {OrderService} from '../../../../core/service/order.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() isPanelOpen: boolean;
  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  count = 0;
  value = 0;
  cartItems: CartItem<Product>[] = [];

  constructor(
    private readonly cartService: CartService,
    private readonly orderService: OrderService
  ) {
    cartService.cart$
      .pipe(tap((_) => (this.count = cartService.totalItemsQuantity())))
      .pipe(tap((_) => (this.value = cartService.value())))
      .subscribe((res) => (this.cartItems = res));
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

  sendOrder(): void {
    this.orderService.sendOrder(this.cartService.cart).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
