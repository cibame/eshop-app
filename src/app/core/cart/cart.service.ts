import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {CartItem} from './model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart$: BehaviorSubject<CartItem<Product>[]> = new BehaviorSubject<CartItem<Product>[]>([]);
  cart$: Observable<CartItem<Product>[]> = this._cart$.asObservable();

  get cart(): CartItem<Product>[] {
    return this._cart$.getValue();
  }

  constructor() {
    if (sessionStorage.getItem('cartContent')) {
      this._cart$.next(JSON.parse(sessionStorage.getItem('cartContent')));
    }
    this._cart$.subscribe(cartItems => sessionStorage.setItem('cartContent', JSON.stringify(cartItems)));
  }

  add(item: Product, quantity: number = 1): void {
    const ci = this._cart$.value.find((cartItem) => cartItem.item.id === item.id);
    if (ci) {
      ci.quantity += quantity;
    } else {
      this._cart$.value.push({item, quantity});
    }
    this._cart$.next(this._cart$.value);
  }

  remove(item: Product): void {
    this._cart$.next(
      this._cart$.value.filter((cartItem) => cartItem.item.id !== item.id)
    );
  }

  changeQuantity(item: Product, quantity: number = 1): void {
    const ci = this._cart$.value.find((cartItem) => cartItem.item.id === item.id);
    if (ci) {
      ci.quantity = quantity;
    }
    this._cart$.next(this._cart$.value);
  }

  value(): number {
    return this._cart$.value.reduce(
      (value, cartItem) => value + cartItem.item.price * cartItem.quantity,
      0
    );
  }

  totalItemsQuantity(): number {
    return this._cart$.value.reduce(
      (value, cartItem) => value + cartItem.quantity,
      0
    );
  }

  empty(): void {
    this._cart$.next([]);
  }
}
