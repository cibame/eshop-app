import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../../../core/cart/cart.service';
import {OrderType} from '../../../../core/model/order.model';
import {CreateOrderUser} from '../../../../core/service/order.service';
import {CheckoutService} from '../../checkout.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  isLoading = false;

  constructor(private checkoutService: CheckoutService,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  placeOrder(orderInfo: { user: CreateOrderUser, note: string, type: OrderType }): void {
    this.isLoading = true;
    this.checkoutService.checkout(orderInfo.user, orderInfo.note, orderInfo.type)
      .subscribe(res => {
          this.cartService.empty();
          this.router.navigate(['order', res.id]);
        }, error => {
          console.log(error);
          this.isLoading = false;
        });
  }

}
