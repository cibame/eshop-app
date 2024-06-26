import { CreateOrderUser } from '../service/order.service';
import { Product } from './product.model';

export enum OrderType {
  PICKUP = 'pickup',
  DELIVERY = 'delivery',
}

export enum OrderStatus {
  WAITING_CONFIRMATION = 'waiting-confirmation',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  DELIVERED = 'delivered',
}

export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  product: Product;
}

export interface OrderDto {
  id: number;
  uuid: string;
  note: string;
  type: OrderType;
  user: CreateOrderUser;
  products: OrderItem[];
  dateCreated: string;
  status?: OrderStatus;
}

export class Order implements OrderDto {
  id: number;
  uuid: string;
  note: string;
  type: OrderType;
  user: CreateOrderUser;
  products: OrderItem[];
  dateCreated: string;
  status: OrderStatus;

  constructor(order: OrderDto) {
    this.id = order.id;
    this.uuid = order.uuid;
    this.note = order.note;
    this.type = order.type;
    this.user = order.user;
    this.products = order.products;
    this.dateCreated = order.dateCreated;
    // TODO: use real status instead of address check
    this.status = order.status || OrderStatus.WAITING_CONFIRMATION;
  }

  get value(): number {
    return this.products.reduce(
      (value, item) => value + item.price * item.quantity,
      0
    );
  }
}
