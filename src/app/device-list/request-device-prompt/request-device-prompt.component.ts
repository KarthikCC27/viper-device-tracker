import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-device-prompt',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './request-device-prompt.component.html',
  styleUrl: './request-device-prompt.component.css'
})
export class RequestDevicePromptComponent {

  @Input() isRequestDeviceVisible:Boolean=false;
  @Output() closeRequestModal = new EventEmitter<void>();
  @Output() RequestDeviceModal = new EventEmitter<FormGroup>();

  close() {
    this.closeRequestModal.emit();
  }

  RequestDeviceForm = new FormGroup({
    device_type: new FormControl(''),
    comments: new FormControl('')
  });

  onSubmit(){
    this.toggleRequestDeviceModal();
    this.closeRequestModal.emit();
    this.RequestDeviceModal.emit(this.RequestDeviceForm);
  }

  toggleRequestDeviceModal() {
    this.isRequestDeviceVisible = !this.isRequestDeviceVisible;
  }
}
