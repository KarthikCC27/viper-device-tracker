import { Component } from '@angular/core';
import { AddDevicePromptComponent } from './add-device-prompt/add-device-prompt.component';
import { AgGridModule } from 'ag-grid-angular';
import {
  ColDef,
  GridApi,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from 'ag-grid-community';
import { RequestDevicePromptComponent } from './request-device-prompt/request-device-prompt.component';
import { ActionsCellComponent } from './actions-cell/actions-cell.component';
import { DelDevicePromptComponent } from './del-device-prompt/del-device-prompt.component';
import { DeviceLogComponent } from './device-log/device-log.component';
import { HandoverComponent } from './handover/handover.component';
import { EditDevicePromptComponent } from './edit-device-prompt/edit-device-prompt.component';

interface Irow {
  device_type: string;
  device_Name: string;
  tag_ID: string;
  from_date: Date;
  to_date: Date;
  status: string;
  comments: string;
  update: string;
  accessories: string[];
}

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [
    AddDevicePromptComponent,
    AgGridModule,
    RequestDevicePromptComponent,
    DelDevicePromptComponent,
    DeviceLogComponent,
    HandoverComponent,
    EditDevicePromptComponent
  ],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css',
})
export class DeviceListComponent {
  private gridApi!: GridApi;

  row_data: Irow[] = [
    {
      device_type: 'iOS',
      device_Name: 'iOS device',
      tag_ID: '3r2654h97862',
      from_date: new Date('03-21-2024'),
      to_date: new Date('03-28-2024'),
      status: 'Working',
      comments: 'string',
      update: 'string',
      accessories: ['Adapter','Remote'],
    },
    {
      device_type: 'STB',
      device_Name: 'STB device',
      tag_ID: '9087gytr54w6',
      from_date: new Date('03-20-2024'),
      to_date: new Date('03-27-2024'),
      status: 'Not working',
      comments: 'string',
      update: 'string',
      accessories: ['DeviceCover','DeviceBox'],
    },
  ];
  colDefs: ColDef<any>[] = [
    { field: 'device_Name', pinned: 'left' },
    {
      field: 'actions',
      pinned: 'right',
      cellRenderer: ActionsCellComponent,
      cellRendererParams: {
        onEditClick: this.onEditClick.bind(this),
        onDeleteClick: this.onDeleteClick.bind(this),
        onHandOverClick:this.onHandOverClick.bind(this),
        onDeviceLogClick:this.onDeviceLogClick.bind(this)
      },
    },
    { field: 'device_type' },
    { field: 'tag_ID' },
    { field: 'from_date' },
    { field: 'to_date' },
    { field: 'status' },
    { field: 'comments' },
    { field: 'update' },
    { field: 'accessories' },
  ];

  formData: any = {};

  defaultColDef = {
    sortable: true,
    filter: true,
  };

  isAddDeviceVisible: boolean = false;
  isRequestDeviceVisible: boolean = false;
  isDelDeviceVisible: boolean = false;
  isHandOverVisible: boolean = false;
  isDeviceLogVisible:boolean = false;
  isEditDeviceVisible:boolean = false;
  delParams:any;

  public autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
    type: 'fitCellContents',
  };

  onDeleteClick(params: any) {
    this.toggleDelDeviceModal();
    this.delParams = params;
  }

  onEditClick(params: any) {
    this.formData=params.data;
    console.log(this.formData)
    this.toggleEditDeviceModal();
  }

  onHandOverClick(params:any){
    this.toggleHandOverModal();
  }

  onDeviceLogClick(){
    this.toggleDeviceLogModal();
  }

  toggleAddDeviceModal() {
    this.isAddDeviceVisible = !this.isAddDeviceVisible;
    return this.isAddDeviceVisible;
  }

  toggleEditDeviceModal() {
    this.isEditDeviceVisible = !this.isEditDeviceVisible;
    return this.isEditDeviceVisible;
  }

  toggleRequestDeviceModal() {
    this.isRequestDeviceVisible = !this.isRequestDeviceVisible;
    return this.isRequestDeviceVisible;
  }

  toggleDelDeviceModal() {
    this.isDelDeviceVisible = !this.isDelDeviceVisible;
    return this.isDelDeviceVisible;
  }

  toggleHandOverModal(){
    this.isHandOverVisible = !this.isHandOverVisible;
    return this.isHandOverVisible;
  }

  toggleDeviceLogModal(){
    this.isDeviceLogVisible = !this.isDeviceLogVisible;
    return this.isDeviceLogVisible;
  }

  addRow(data: any) {
    console.log(data);
    let newData = {
      device_type: data.value.device_type,
      device_Name: data.value.device_Name,
      tag_ID: data.value.tag_ID,
      from_date: new Date(data.value.from_date),
      to_date: new Date(data.value.from_date),
      status: data.value.status,
      comments: data.value.comments,
      update: data.value.update,
      hand_over: data.value.hand_over,
      accessories: data.value.accessories,
      device_logs: data.value.device_logs,
    };
    this.row_data.push(newData);
    this.gridApi!.applyTransaction({ add: [newData] });
  }

  ReqDevice(data: any) {
    console.log(data.value);
  }

  delDevice(data:any){
    const rowData = [this.delParams.data];
    this.gridApi!.applyTransaction({ remove: rowData });
    this.toggleDelDeviceModal();
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.refreshCells(params);
  }
}
