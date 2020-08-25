import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  checked: boolean;
  form: FormGroup;
  message: AbstractControl;
  messages;

  constructor(private fb: FormBuilder,
              private afs: AngularFirestore,
              private messageService: MessageService) {
    this.form = this.fb.group({
      message: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
    this.messages = this.afs.collection('messages').valueChanges({ idField: 'id' });
  }

}
