import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  messages;
  checked: boolean;

  constructor(private fb: FormBuilder,
              private afs: AngularFirestore) {
  }

  // update(item: Item) {
  //   this.itemDoc.update(item);
  // }
  isShow = false;

  ngOnInit(): void {
    this.afs.collection('messages').valueChanges({ idField: 'id' })
      .pipe(take(1))
      .subscribe(
        (res: any) => {
          this.messages = res;
        }
      );


    /*this.messages = this.afs.collection('messages').valueChanges({ idField: 'id' })
      .pipe(
        map(res => {
          return res.map(v => {
            return {
              ...v,
              title: 'hahaha'
            };
          });
        })
      );*/

    /*this.afs.collection('messages').valueChanges({ idField: 'id' })
      .subscribe(
      (res: any) => {
        this.messages = res.map(v => {
          return {
            ...v,
            title: 'hahaha'
          };
        });
      }
    );*/
  }

  // async onClick() {
  //   this.isShow = !this.isShow;
  //   const res = await this.afs.collection('messages').doc('doc.id').update({
  //     status: this.isShow
  //   });
  // }

  async handleChange(e: any, message) {
    // console.log(e, message.id);
    await this.afs.doc(`messages/${message.id}`).update({
      status: e.checked
    });
  }
}
