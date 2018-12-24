import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedetailsComponent } from './managedetails.component';

describe('ManagedetailsComponent', () => {
  let component: ManagedetailsComponent;
  let fixture: ComponentFixture<ManagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
