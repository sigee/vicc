import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViccDetailComponent } from './vicc-detail.component';

describe('ViccDetailComponent', () => {
  let component: ViccDetailComponent;
  let fixture: ComponentFixture<ViccDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViccDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViccDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
