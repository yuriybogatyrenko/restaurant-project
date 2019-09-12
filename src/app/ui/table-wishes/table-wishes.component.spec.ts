import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWishesComponent } from './table-wishes.component';

describe('TableWishesComponent', () => {
  let component: TableWishesComponent;
  let fixture: ComponentFixture<TableWishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
