import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-device-prompt',
  standalone: true,
  imports: [
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './edit-device-prompt.component.html',
  styleUrl: './edit-device-prompt.component.css',
})
export class EditDevicePromptComponent implements OnChanges {

  @Input() isEditDeviceVisible: boolean = true;
  @Input() formdata: any = {};
  @Output() closeEditModal = new EventEmitter<void>();
  @Output() EditDeviceModal = new EventEmitter<FormGroup>();

  deviceForm: FormGroup;
  accessories: string[] = [
    'Adapter',
    'Headphones',
    'USBCable',
    'USBConnector',
    'DeviceCover',
    'DeviceBox',
    'Remote',
  ];

  
  dropdownList: any[] = [];
  selectedItems: any[] = [];

  dropdownSettings: IDropdownSettings = {
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    itemsShowLimit: 1,
  };

  constructor() {
    this.deviceForm = new FormGroup({
      device_type: new FormControl('', Validators.required),
      device_tagId: new FormControl('', Validators.required),
      device_name: new FormControl('', Validators.required),
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      accessories: new FormControl([]),
      status: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
      update: new FormControl('', Validators.required),
    });
  }

  ngOnChanges() {
    this.deviceForm.controls['device_name'].setValue(this.formdata.device_Name);
    this.deviceForm.controls['device_tagId'].setValue(this.formdata.tag_ID);
    this.deviceForm.controls['comments'].setValue(this.formdata.comments);
    this.deviceForm.controls['update'].setValue(this.formdata.update);
    this.deviceForm.controls['device_type'].setValue(this.formdata.device_type);
    this.deviceForm.controls['fromDate'].setValue(formatDate(this.formdata.from_date, 'yyyy-MM-dd', 'en'));
    this.deviceForm.controls['toDate'].setValue(formatDate(this.formdata.to_date, 'yyyy-MM-dd', 'en'));
    this.deviceForm.controls['device_name'].setValue(this.formdata.device_Name);
    this.deviceForm.controls['device_name'].setValue(this.formdata.device_Name);
    this.deviceForm.controls['status'].setValue(this.formdata.status == 'Working' ? true : false)
    this.selectedItems = this.formdata.accessories;    
  }


  close() {
    console.log(this.formdata);
    this.deviceForm.reset();
    this.closeEditModal.emit();
  }

  onSubmit(): void {
    console.log(this.deviceForm.value);
    this.EditDeviceModal.emit(this.deviceForm);
    this.toggleEditDeviceModal();
    this.closeEditModal.emit();
  }

  toggleEditDeviceModal() {
    this.isEditDeviceVisible = !this.isEditDeviceVisible;
  }

  isInvalid(field: string): boolean {
    const control = this.deviceForm.get(field);
    return !!control && control.invalid && control.touched;
  }
}
