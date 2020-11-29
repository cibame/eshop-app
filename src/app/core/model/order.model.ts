import {CreateOrderUser} from '../service/order.service';
import {Product} from './product.model';

export enum OrderType {
  PICKUP = 'pickup',
  DELIVERY = 'delivery'
}

export enum OrderStatus {
  TO_BE_CONFIRMED = 'toBeConfirmed',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled'
}

export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  product: Product;
}

export interface OrderDto {
  id: number;
  note: string;
  type: OrderType;
  user: CreateOrderUser;
  products: OrderItem[];
  dateCreated: string;
  status?: OrderStatus;
}

export class Order implements OrderDto {
  id: number;
  note: string;
  type: OrderType;
  user: CreateOrderUser;
  products: OrderItem[];
  dateCreated: string;
  status: OrderStatus;

  constructor(order: OrderDto) {
    this.id = order.id;
    this.note = order.note;
    this.type = order.type;
    this.user = order.user;
    this.products = order.products;
    this.dateCreated = order.dateCreated;
    // TODO: use real status instead of address check
    this.status = order.status || OrderStatus.TO_BE_CONFIRMED;
  }

  get value(): number {
    return this.products.reduce(
      (value, item) => value + item.price * item.quantity,
      0
    );
  }
}
