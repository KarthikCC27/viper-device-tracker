import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-handover',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule,NgMultiSelectDropDownModule],
  templateUrl: './handover.component.html',
  styleUrl: './handover.component.css'
})
export class HandoverComponent {
  @Input() isHandOverDeviceVisible: Boolean = true;
  @Input() formdata: any = {};
  @Output() closeHandOverModal = new EventEmitter<void>();
  @Output() HandOverDeviceModal = new EventEmitter<FormGroup>();

  close() {
    console.log(this.formdata);
    this.deviceForm.reset();
    this.closeHandOverModal.emit();
  }

  accessories: string[] = [
    'Adapter',
    'Headphones',
    'USBCable',
    'USBConnector',
    'DeviceCover',
    'DeviceBox',
    'Remote',
  ];

  deviceForm = new FormGroup({
    device_type: new FormControl('', Validators.required),
    device_tagId: new FormControl('', Validators.required),
    device_name: new FormControl(
      this.formdata.device_Name,
      Validators.required
    ),
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required),
    accessories: new FormControl([]),
    status: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
    handOver: new FormControl('', Validators.required)
  });

  onSubmit(): void {
    console.log(this.deviceForm.value);
    this.HandOverDeviceModal.emit(this.deviceForm);
    this.toggleHandOverDeviceModal();
    this.closeHandOverModal.emit();
  }

  toggleHandOverDeviceModal() {
    this.isHandOverDeviceVisible = !this.isHandOverDeviceVisible;
  }

  isInvalid(field: string): boolean {
    const control = this.deviceForm.get(field);
    return !!control && control.invalid && control.touched;
  }

  dropdownList: any[] = [];
  selectedItems: any[] = [];

  dropdownSettings: IDropdownSettings = {
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    itemsShowLimit: 1,
  };

}
