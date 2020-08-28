import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DashboardService } from '@pages/dashboard/dashboard.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cfs-show',
  templateUrl: './cfs-show.component.html',
  styleUrls: ['./cfs-show.component.scss']
})
export class CfsShowComponent implements OnInit {
  messages;
  currentMessage: any;
  currentComments: any;
  submitted: boolean;
  form: FormGroup;
  comment: AbstractControl;
  errorMessage: string;
  validationMessages = {
    comment: {
      minlength: 'Nhập tối thiểu 3 ký tự',
      maxlength: 'Nhập tối đa 250 ký tự'
    }
  };

  constructor(private fb: FormBuilder, private afs: AngularFirestore, private messageService: MessageService) {
    this.form = this.fb.group({
      comment: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(250)
      ])]
    });
    this.comment = this.form.controls.comment;
  }

  ngOnInit(): void {
    this.messages = this.afs.collection('messages').valueChanges({ idField: 'id' });
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const { comment } = this.form.value;
    try {
      const res = await this.afs.collection(`messages/${this.currentMessage.id}/comments`).add({
        comment,
        timestamp: Date.now()
      });
      // @ts-ignore
      if (res) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Gửi thành công' });
        this.submitted = false;
      }
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Gửi thất bại' });
      this.submitted = false;
    }
  }

  onSendMore() {
    this.submitted = false;
    this.form.reset();
  }

  onShowMessageDetail(message) {
    this.currentMessage = message;
    this.currentComments = this.afs.collection(`messages/${this.currentMessage.id}/comments`,
      ref => ref.orderBy('timestamp', 'desc')
    ).valueChanges();
  }
}
