import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {CartService} from '../../core/cart/cart.service';
import {CartItem} from '../../core/cart/model/cart-item.model';
import {Product} from '../../core/model/product.model';
import {OrderService} from '../../core/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  active = 1;
  count = 0;
  value = 0;
  cartItems: CartItem<Product>[] = [];

  deliveryForm: FormGroup;
  pickupForm: FormGroup;

  constructor(
    private readonly cartService: CartService,
    private readonly orderService: OrderService,
    private readonly formBuilder: FormBuilder
  ) {
    cartService.cart$
      .pipe(
        takeUntil(this.unsubscribe$),
        tap((_) => (this.count = cartService.totalItemsQuantity())),
        tap((_) => (this.value = cartService.value()))
      )
      .subscribe((res) => (this.cartItems = res));

    this.deliveryForm = this.formBuilder.group({
      contactInfo: ['', Validators.required],
      firstName: [''],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      note: [''],
      acceptance: [false, Validators.required]
    });

    this.pickupForm = this.formBuilder.group({
      contactInfo: ['', Validators.required],
      firstName: [''],
      lastName: ['', Validators.required],
      note: [''],
      acceptance: [false, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
