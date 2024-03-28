import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevicePromptComponent } from './add-device-prompt.component';

describe('AddDevicePromptComponent', () => {
  let component: AddDevicePromptComponent;
  let fixture: ComponentFixture<AddDevicePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDevicePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDevicePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
