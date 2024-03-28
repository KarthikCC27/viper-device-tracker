import { Component } from '@angular/core';
import { AddDevicePromptComponent } from './add-device-prompt/add-device-prompt.component';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi } from 'ag-grid-community';
import { RequestDevicePromptComponent } from './request-device-prompt/request-device-prompt.component';

interface Irow {
  device_type: string;
  device_Name: string;
  tag_ID: string;
  from_date: Date;
  to_date: Date;
  status: string;
  comments: string;
  update: string;
  hand_over: string;
  accessories: string;
  device_logs: string;
}

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [AddDevicePromptComponent, AgGridModule,RequestDevicePromptComponent],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css',
})
export class DeviceListComponent {

  private gridApi!: GridApi;
  
  row_data: Irow[] = [
    {
      device_type: 'string',
      device_Name: 'string',
      tag_ID: 'string',
      from_date: new Date('03-20-2024'),
      to_date: new Date('03-27-2024'),
      status: 'string',
      comments: 'string',
      update: 'string',
      hand_over: 'string',
      accessories: 'string',
      device_logs: 'string',
    },
  ];
  colDefs: ColDef<Irow>[] = [
    { field: 'device_type' },
    { field: 'device_Name' },
    { field: 'tag_ID' },
    { field: 'from_date' },
    { field: 'to_date' },
    { field: 'status' },
    { field: 'comments' },
    { field: 'update' },
    { field: 'hand_over' },
    { field: 'accessories' },
    { field: 'device_logs' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
  };

  isAddDeviceVisible: Boolean = false;
  isRequestDeviceVisible: Boolean = false;

  toggleAddDeviceModal() {
    this.isAddDeviceVisible = !this.isAddDeviceVisible;
    return this.isAddDeviceVisible;
  }

  toggleRequestDeviceModal(){
    this.isRequestDeviceVisible = !this.isRequestDeviceVisible;
    return this.isRequestDeviceVisible;
  }

  addRow(data: any) {
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
    this.row_data.push(newData)
    this.gridApi!.applyTransaction({add:[newData]})
  }

  ReqDevice(data:any){
    console.log(data.value);
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.refreshCells(params);
  }


}
