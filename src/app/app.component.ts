import { Component, OnInit } from '@angular/core';
import { OrderService } from './core/firebase/service/order.service';
import { ProductService } from './core/firebase/service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'zero-booking';

  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {
        console.log(err);
      }
    );
    this.orderService.getOrders().subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
