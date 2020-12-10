import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order, OrderStatus, OrderType} from '../../../../core/model/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  orderStatus = OrderStatus;
  orderType = OrderType;

  constructor(route: ActivatedRoute) {
    this.order = new Order(route.snapshot.data.order);
  }

  ngOnInit(): void {
  }

}
