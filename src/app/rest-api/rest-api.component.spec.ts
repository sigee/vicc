import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiComponent } from './rest-api.component';

describe('RestApiComponent', () => {
  let component: RestApiComponent;
  let fixture: ComponentFixture<RestApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
