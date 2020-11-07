import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../model/order.firebase';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private readonly _firestoreService: FirestoreService) {}

  public getOrders(): Observable<any> {
    return this._firestoreService
      .collection('order')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data) => data.map((d) => Order.converter.fromFirestoreData(d)))
      );
  }
}
