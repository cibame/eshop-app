import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CartItem } from '../cart/model/cart-item.model';
import { Product } from '../model/product.model';

interface CreateOrderUser {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  telephone: string;
}

interface CreateOrderProduct {
  productId: number;
  quantity: number;
}

interface CreateOrderRequest {
  note: string;
  user: CreateOrderUser;
  products: CreateOrderProduct[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private readonly _http: HttpClient) {}

  public sendOrder(cart: CartItem<Product>[]): Observable<any> {
    const order: CreateOrderRequest = {
      note: 'notes',
      user: {
        firstName: 'test name',
        lastName: 'test last name',
        email: 'test@test.com',
        address: 'via dei campioni',
        telephone: '3334413402',
      },
      products: cart.map((c) => ({
        productId: c.item.id,
        quantity: c.quantity,
      })),
    };
    return this._http.post(environment.baseUrl + '/orders', order);
  }
}
