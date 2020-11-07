import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.firebase';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly _firestoreService: FirestoreService) {}

  public getProducts(): Observable<Product[]> {
    return this._firestoreService
      .collection('product')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data) => data.map((d) => Product.converter.fromFirestoreData(d)))
      );
  }
}
