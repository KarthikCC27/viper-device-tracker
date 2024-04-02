import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDevicePromptComponent } from './del-device-prompt.component';

describe('DelDevicePromptComponent', () => {
  let component: DelDevicePromptComponent;
  let fixture: ComponentFixture<DelDevicePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelDevicePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelDevicePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
