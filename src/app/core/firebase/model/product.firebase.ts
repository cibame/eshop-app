import {
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { FirebaseModel } from './model.firebase';
import { FirebaseSerialization } from './util/firebase-serialization';

export class Product extends FirebaseModel {
  readonly description: string;
  readonly image: string;
  readonly name: string;
  readonly price: number;

  constructor(data: firestore.DocumentData) {
    super(data);
    this.description = data.description;
    this.image = data.image;
    this.name = data.name;
    this.price = data.price;
  }

  static converter: FirebaseSerialization<Product> = {
    toFirestore(model: Product, meatadata: any): DocumentData {
      return FirebaseModel.converter.toFirestore(model);
    },

    fromFirestoreSnapshot(
      snapshot: DocumentSnapshot<Product> | QueryDocumentSnapshot<Product>
    ): Product {
      return { ...new Product(snapshot.data()), id: snapshot.id };
    },

    fromFirestoreData(data: firestore.DocumentData): Product {
      return new Product(data);
    },
  };
}
