import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-device-prompt',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-device-prompt.component.html',
  styleUrl: './add-device-prompt.component.css',
})
export class AddDevicePromptComponent {
  constructor(public httpClient: HttpClient) {}

  @Input() isAddDeviceVisible: Boolean = false;
  @Output() closeAddModal = new EventEmitter<void>();
  @Output() AddDeviceModal = new EventEmitter<FormGroup>();

  close() {
    this.closeAddModal.emit();
  }

  private url = 'https://mpd3d9bd6b2a9869c8bf.free.beeceptor.com';

  deviceForm = new FormGroup({
    device_type: new FormControl(''),
    device_tagId: new FormControl(''),
    device_name: new FormControl(''),
    description: new FormControl(''),
    received_date: new FormControl(''),
    accessories: new FormControl(''),
    device_osversion: new FormControl(''),
    whitelisted: new FormControl(''),
    devicepin: new FormControl(''),
    owner: new FormControl(''),
    device_log: new FormControl(''),
  });
  onSubmit(): void {
    console.log(this.deviceForm.value);
    this.httpClient
      .post(this.url, this.deviceForm.value, { responseType: 'text' })
      .subscribe(
        (response) => console.log(response),
        (error) => {
          console.log(error);
        }
      );
    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      '#sortboxmenu input[type="checkbox"]:checked'
    );
    const checkedValues: string[] = [];
    checkboxes.forEach(function (checkbox) {
      checkedValues.push(checkbox.value);
    });
    console.log(checkedValues);
    this.toggleAddDeviceModal();
    this.AddDeviceModal.emit(this.deviceForm);
    this.closeAddModal.emit();
  }

  toggleAddDeviceModal() {
    this.isAddDeviceVisible = !this.isAddDeviceVisible;
  }
}
