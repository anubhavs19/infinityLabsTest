import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostViewEditComponent } from './host-view-edit.component';

describe('HostViewEditComponent', () => {
  let component: HostViewEditComponent;
  let fixture: ComponentFixture<HostViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
