import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpDetailComponent } from './devexp-detail.component';

describe('DevexpDetailComponent', () => {
  let component: DevexpDetailComponent;
  let fixture: ComponentFixture<DevexpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevexpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevexpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
