import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CartItem} from '../cart/model/cart-item.model';
import {Order, OrderType} from '../model/order.model';
import {Product} from '../model/product.model';

export interface CreateOrderUser {
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  telephone: string;
}

interface CreateOrderProduct {
  productId: number;
  quantity: number;
}

interface CreateOrderRequest {
  note: string;
  type: OrderType;
  user: CreateOrderUser;
  products: CreateOrderProduct[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private readonly _http: HttpClient) {
  }

  public sendOrder(cart: CartItem<Product>[], user: CreateOrderUser, note: string, type: OrderType): Observable<Order> {
    const order: CreateOrderRequest = {
      note,
      type,
      user,
      products: cart.map((c) => ({
        productId: c.item.id,
        quantity: c.quantity
      }))
    };
    return this._http.post<Order>(environment.baseUrl + '/orders', order);
  }
}
