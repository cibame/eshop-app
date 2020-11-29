import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CartItem} from '../cart/model/cart-item.model';
import {OrderDto, OrderType} from '../model/order.model';
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

  public sendOrder(cart: CartItem<Product>[], user: CreateOrderUser, note: string, type: OrderType): Observable<OrderDto> {
    const order: CreateOrderRequest = {
      note,
      type,
      user,
      products: cart.map((c) => ({
        productId: c.item.id,
        quantity: c.quantity
      }))
    };
    console.log(order);
    return this._http.post<OrderDto>(environment.baseUrl + '/orders', order);
  }

  public get(id: string): Observable<OrderDto> {
    return this._http.get<OrderDto>(environment.baseUrl + '/orders/' + id);
  }
}
