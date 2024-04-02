import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-del-device-prompt',
  standalone: true,
  imports: [],
  templateUrl: './del-device-prompt.component.html',
  styleUrl: './del-device-prompt.component.css'
})
export class DelDevicePromptComponent {
  @Input() isDelDeviceVisible:boolean=false;
  @Output() closeDelModal = new EventEmitter<void>();
  @Output() delDevice = new EventEmitter<void>();

  close(){
    this.closeDelModal.emit();
  }

  delRow(){
    this.delDevice.emit();
  }
}
