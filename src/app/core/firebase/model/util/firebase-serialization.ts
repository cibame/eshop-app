import {
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore/interfaces';
import { firestore } from 'firebase';

export interface FirebaseSerialization<T> {
  /**
   * From Object to Firestore representetion
   * @param obj The object to serialize to firestore
   * @param metadata Extra data added to the object at serialization time
   */
  toFirestore(obj: T, metadata?: any): firestore.DocumentData;

  /**
   * Create and object from a firestore snapshot
   * @param snapshot The snapshot to convert
   */
  fromFirestoreSnapshot(
    snapshot: DocumentSnapshot<T> | QueryDocumentSnapshot<T>
  ): T;

  /**
   * Convert from firestore data value to the target object
   * @param data Firestore data
   */
  fromFirestoreData(data: firestore.DocumentData): T;
}
