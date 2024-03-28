import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDevicePromptComponent } from './request-device-prompt.component';

describe('RequestDevicePromptComponent', () => {
  let component: RequestDevicePromptComponent;
  let fixture: ComponentFixture<RequestDevicePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestDevicePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestDevicePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
