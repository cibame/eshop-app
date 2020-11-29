import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CartService} from '../../core/cart/cart.service';
import {Order, OrderType} from '../../core/model/order.model';
import {CreateOrderUser, OrderService} from '../../core/service/order.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private orderService: OrderService,
              private cartService: CartService) { }

  checkout(user: CreateOrderUser, note: string, type: OrderType): Observable<Order> {
    return this.orderService.sendOrder(this.cartService.cart, user, note, type);
  }
}
