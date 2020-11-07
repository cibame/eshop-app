import {
  DocumentData,
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { FirebaseSerialization } from './util/firebase-serialization';

/**
 * Base class for all firebase models saved in FireStore.
 * Contains basic elements:
 * - id
 * - createDate
 * - updateDate
 */
export class FirebaseModel {
  constructor(data: firestore.DocumentData) {
    this.id = data.id;
    this.updatedAt = data.updatedAt?.toDate();
    this.createdAt = data.createdAt?.toDate();
  }

  id = '';
  updatedAt: Date;
  createdAt: Date;

  /**
   * Base implementation of converter, to be used in every derived class.
   * This implementation takes care of not writing unwanted data to the firestore object.
   * MUST BE CALLED IN EVERY DERIVED CONVERTER
   */
  static converter: FirebaseSerialization<FirebaseModel> = {
    toFirestore(model: FirebaseModel, meatadata: any): DocumentData {
      delete model.createdAt;
      delete model.updatedAt;

      // Sanitize entries removing undefined as not accepted by firestore
      for (const k in model) {
        if (model[k] === undefined) {
          model[k] = null;
        }
      }

      return { ...model, ...meatadata };
    },

    fromFirestoreSnapshot(
      snapshot:
        | DocumentSnapshot<FirebaseModel>
        | QueryDocumentSnapshot<FirebaseModel>
    ): FirebaseModel {
      throw new Error('Base fromFirestoreSnapshot method not implemented');
    },

    fromFirestoreData(data: firestore.DocumentData): FirebaseModel {
      throw new Error('Base fromFirestoreSnapshot method not implemented');
    },
  };
}
