import { trigger,transition,style,animate } from '@angular/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-device-prompt',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-device-prompt.component.html',
  styleUrl: './add-device-prompt.component.css',

})
export class AddDevicePromptComponent {
  constructor(public httpClient: HttpClient) {}

  private url = 'https://mpd3d9bd6b2a9869c8bf.free.beeceptor.com';
  showModal: Boolean = false;

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
    this.toggleModal();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
