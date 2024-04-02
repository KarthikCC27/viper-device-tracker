import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HandoverComponent } from '../handover/handover.component';
import { DeviceLogComponent } from '../device-log/device-log.component';
import {
  IDropdownSettings,
  NgMultiSelectDropDownModule,
} from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-device-prompt',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    HandoverComponent,
    DeviceLogComponent,
  ],
  templateUrl: './add-device-prompt.component.html',
  styleUrl: './add-device-prompt.component.css',
})
export class AddDevicePromptComponent implements DoCheck, OnInit {
  constructor(public httpClient: HttpClient) {}

  @Input() isAddDeviceVisible: Boolean = false;
  @Output() closeAddModal = new EventEmitter<void>();
  @Output() AddDeviceModal = new EventEmitter<FormGroup>();

  dropdownList: any[] = [];
  selectedItems: any[] = [];
  deviceForm!: FormGroup;

  dropdownSettings: IDropdownSettings = {
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    itemsShowLimit: 1,
  };

  accessories: string[] = [
    'Adapter',
    'Headphones',
    'USBCable',
    'USBConnector',
    'DeviceCover',
    'DeviceBox',
    'Remote',
  ];

  isEmailDisabled: boolean = true;

  ngOnInit() {
    this.deviceForm = new FormGroup({
      device_type: new FormControl('', Validators.required),
      device_tagId: new FormControl('', Validators.required),
      device_name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      received_date: new FormControl('', Validators.required),
      accessories: new FormControl([]),
      device_osversion: new FormControl('', Validators.required),
      whitelisted: new FormControl(false, Validators.required),
      devicepin: new FormControl('', Validators.required),
      owner: new FormControl('', Validators.required),
      device_log: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    console.log(this.deviceForm.value);
    this.AddDeviceModal.emit(this.deviceForm);
    this.toggleAddDeviceModal();
    this.closeAddModal.emit();
  }

  toggleAddDeviceModal() {
    this.isAddDeviceVisible = !this.isAddDeviceVisible;
  }

  isInvalid(field: string): boolean {
    const control = this.deviceForm.get(field);
    return !!control && control.invalid && control.touched;
  }

  close() {
    this.deviceForm.reset();
    this.closeAddModal.emit();
  }

  ngDoCheck() {
    if (this.deviceForm.value.whitelisted == true) {
      this.isEmailDisabled = false;
    } else {
      this.isEmailDisabled = true;
    }
  }
}
