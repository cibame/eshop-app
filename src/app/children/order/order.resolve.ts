import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OrderDto} from '../../core/model/order.model';
import {OrderService} from '../../core/service/order.service';

@Injectable()
export class OrderResolve implements Resolve<OrderDto> {
  constructor(private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderDto> {
    return this.orderService.get(route.paramMap.get('uuid'));
  }
}
