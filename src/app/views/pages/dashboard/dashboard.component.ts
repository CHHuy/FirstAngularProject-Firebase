import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@pages/dashboard/dashboard.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submitted: boolean;
  form: FormGroup;
  message: AbstractControl;
  errorMessage: string;

  validationMessages = {
    message: {
      required: 'Đừng ngại nói lên tâm tư bạn nhé!',
      minlength: 'Nhập tối thiểu 3 ký tự',
      maxlength: 'Nhập tối đa 250 ký tự'
    }
  };

  constructor(private dashboardService: DashboardService,
              private fb: FormBuilder,
              private afs: AngularFirestore,
              private messageService: MessageService) {
    this.form = this.fb.group({
      message: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ])]
    });
    this.message = this.form.controls.message;
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const { message } = this.form.value;

    try {
      const res = await this.afs.collection('messages').add({
        content: message,
        status: false,
      });
      if (res) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Gửi thành công' });
      }
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Gửi thất bại' });
    }
  }

  onSendMore() {
    this.submitted = false;
    this.form.reset();
  }
}

