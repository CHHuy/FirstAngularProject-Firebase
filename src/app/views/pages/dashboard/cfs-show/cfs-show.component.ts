import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DashboardService } from '@pages/dashboard/dashboard.service';

@Component({
  selector: 'app-cfs-show',
  templateUrl: './cfs-show.component.html',
  styleUrls: ['./cfs-show.component.scss']
})
export class CfsShowComponent implements OnInit {
  messages;

  currentMessage: any;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.messages = this.afs.collection('messages').valueChanges({ idField: 'id' });
  }

  onShowMessageDetail(message) {
    this.currentMessage = message;
  }
}
