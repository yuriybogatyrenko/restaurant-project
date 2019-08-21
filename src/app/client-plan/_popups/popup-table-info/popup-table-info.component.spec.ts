import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTableInfoComponent } from './popup-table-info.component';

describe('PopupTableInfoComponent', () => {
  let component: PopupTableInfoComponent;
  let fixture: ComponentFixture<PopupTableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupTableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
