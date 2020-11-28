import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {CartService} from '../../../../core/cart/cart.service';
import {CartItem} from '../../../../core/cart/model/cart-item.model';
import {Product} from '../../../../core/model/product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  value = 0;
  cartItems: CartItem<Product>[] = [];

  constructor(
    private readonly cartService: CartService,
  ) {
    cartService.cart$
      .pipe(
        takeUntil(this.unsubscribe$),
        tap((_) => (this.value = cartService.value()))
      )
      .subscribe((res) => (this.cartItems = res));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
