import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {
  ColDef,
  GridApi,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from 'ag-grid-community';

interface Irow {
  owner: string;
  status: string;
  accessories: string;
  comments: string;
}

@Component({
  selector: 'app-device-log',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './device-log.component.html',
  styleUrl: './device-log.component.css',
})
export class DeviceLogComponent {

  @Input() isDeviceLogVisible:boolean = false;
  @Output() closeDeviceLogModal = new EventEmitter<void>();


  private gridApi!: GridApi;

  row_data: Irow[] = [
    {
      owner: 'User1',
      status: 'Working',
      accessories: 'Adapter,DeviceCover',
      comments: 'string',
    },
    {
      owner: 'User2',
      status: 'Not Working',
      accessories: 'Remote',
      comments: 'string',
    },
  ];

  colDefs: ColDef<any>[] = [
    { field: 'owner' },
    { field: 'status' },
    { field: 'accessories' },
    { field: 'comments' },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
  };

  public autoSizeStrategy:
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy = {
    type: 'fitGridWidth',
  };

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.refreshCells(params);
  }

  close(){
    this.closeDeviceLogModal.emit()
  }
}
