import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from '@angular/fire/firestore/public_api';
import * as firebase from 'firebase';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

/**
 * Helper class that helps with firestore write operations
 * It:
 * - Keeps updateAt and createdAt operations in sync
 * - Use shorthand method to get collection and documetn reference
 */
@Injectable()
export class FirestoreService {
  constructor(private fireStore: AngularFirestore) {}

  private get timestamp(): any {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  /**
   * Sugar method to obtain a collection reference
   * @param ref A collection reference or a string naming the collection
   * @param queryFn An optional query on the collection
   */
  collection<T>(
    ref: CollectionPredicate<T>,
    queryFn?: QueryFn
  ): AngularFirestoreCollection<T> {
    return typeof ref === 'string'
      ? this.fireStore.collection<T>(ref, queryFn)
      : ref;
  }

  /**
   * Sugar method to obtain a document reference
   * @param ref An object reference or a string with the path of the document
   */
  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.fireStore.doc<T>(ref) : ref;
  }

  /**
   * Perform a firestore ADD method to a collection. This method
   * update:
   * - updatedAt field
   * - createdAt field
   * @param ref A collection reference or a string
   * @param data Thedata to add
   */
  add<T>(
    ref: CollectionPredicate<T>,
    data: any
  ): Promise<firebase.firestore.DocumentReference> {
    const timestamp = this.timestamp;
    return this.collection(ref).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp,
    });
  }

  /**
   * Perform a firestore SET operation and update timestamps. This method
   * update:
   * - updatedAt field
   * - createdAt field
   * @param ref An object reference or a string with the path of the document
   * @param data Data to write
   */
  set<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    const timestamp = this.timestamp;
    return this.doc(ref).set({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp,
    });
  }

  /**
   * Perform a firestore UPDATE operation and update timestamps. This method
   * update:
   * - updatedAt field
   * @param ref An object reference or a string with the path of the document
   * @param data Data to write
   */
  update<T>(ref: DocPredicate<T>, data: any): Promise<void> {
    return this.doc(ref).update({
      ...data,
      updatedAt: this.timestamp,
    });
  }

  /**
   * Perform a firestore DELETE operation
   * @param ref An object reference or a string with the path of the document
   */
  delete<T>(ref: DocPredicate<T>): Promise<void> {
    return this.doc(ref).delete();
  }
}
