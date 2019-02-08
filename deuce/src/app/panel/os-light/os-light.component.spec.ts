import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsLightComponent } from './os-light.component';

describe('OsLightComponent', () => {
  let component: OsLightComponent;
  let fixture: ComponentFixture<OsLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
