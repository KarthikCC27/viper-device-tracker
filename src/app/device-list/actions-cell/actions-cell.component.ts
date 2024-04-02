import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actions-cell',
  standalone: true,
  imports: [],
  templateUrl: './actions-cell.component.html',
  styleUrl: './actions-cell.component.css'
})
export class ActionsCellComponent implements ICellRendererAngularComp {

  value:any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  onEditClick(){
    this.value.onEditClick(this.value);
  }

  onDeleteClick(){
    this.value.onDeleteClick(this.value);
  }

  onHandOverClick(){
    this.value.onHandOverClick(this.value);
  }

  onDeviceLogClick(){
    this.value.onDeviceLogClick(this.value);
  }
}

