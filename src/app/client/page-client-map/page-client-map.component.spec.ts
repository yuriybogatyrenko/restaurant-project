import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientMapComponent } from './page-client-map.component';

describe('PageClientMapComponent', () => {
  let component: PageClientMapComponent;
  let fixture: ComponentFixture<PageClientMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClientMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
