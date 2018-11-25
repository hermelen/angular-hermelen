import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevskillsComponent } from './devskills.component';

describe('DevskillsComponent', () => {
  let component: DevskillsComponent;
  let fixture: ComponentFixture<DevskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
