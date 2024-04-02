import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevicePromptComponent } from './edit-device-prompt.component';

describe('EditDevicePromptComponent', () => {
  let component: EditDevicePromptComponent;
  let fixture: ComponentFixture<EditDevicePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDevicePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDevicePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
