import {
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { FirebaseModel } from './model.firebase';
import { Product } from './product.firebase';
import { FirebaseSerialization } from './util/firebase-serialization';

export class OrderUser {
  email: string;
  last_name: string;
  first_name: string;
  phone: string;

  constructor(data: firestore.DocumentData) {
    this.email = data.email;
    this.last_name = data.last_name;
    this.first_name = data.first_name;
    this.phone = data.phone;
  }
}

export class OrderProduct {
  amount: number;
  product: Product;

  constructor(data: firestore.DocumentData) {
    this.amount = data.amount;
    this.product = new Product(data.product);
  }
}

export class Order extends FirebaseModel {
  user: OrderUser;
  products: OrderProduct[];

  constructor(data: firestore.DocumentData) {
    super(data);

    this.user = new OrderUser(data.user);
    this.products = data.products?.map((p) => new OrderProduct(p));
  }

  static converter: FirebaseSerialization<Order> = {
    toFirestore(model: Order, meatadata: any): DocumentData {
      return FirebaseModel.converter.toFirestore(model);
    },

    fromFirestoreSnapshot(
      snapshot: DocumentSnapshot<Order> | QueryDocumentSnapshot<Order>
    ): Order {
      return { ...new Order(snapshot.data()), id: snapshot.id };
    },

    fromFirestoreData(data: firestore.DocumentData): Order {
      return new Order(data);
    },
  };
}
