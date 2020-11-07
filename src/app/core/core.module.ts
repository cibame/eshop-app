import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirebaseModule } from './firebase/firebase.module';
import { FirestoreService } from './firebase/service/firestore.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FirebaseModule],
  providers: [FirestoreService],
})
export class CoreModule {}
