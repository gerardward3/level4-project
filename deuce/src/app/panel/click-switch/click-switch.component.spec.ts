import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickSwitchComponent } from './click-switch.component';

describe('ClickSwitchComponent', () => {
  let component: ClickSwitchComponent;
  let fixture: ComponentFixture<ClickSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
