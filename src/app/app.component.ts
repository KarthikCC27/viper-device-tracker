import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddDevicePromptComponent } from './add-device-prompt/add-device-prompt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddDevicePromptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viper-device-tracker';
}
