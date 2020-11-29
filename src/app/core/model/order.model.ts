import {CreateOrderUser} from '../service/order.service';
import {Product} from './product.model';

export enum OrderType {
  PICKUP = 'pickup',
  DELIVERY = 'delivery'
}

export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  productId: number;
  product: Product;
  dateCreated: string;
  dateUpdated: string;
}

export interface Order {
  id: number;
  note: string;
  type: OrderType;
  user: CreateOrderUser;
  products: OrderItem[];
}
