import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpsComponent } from './devexps.component';

describe('DevexpsComponent', () => {
  let component: DevexpsComponent;
  let fixture: ComponentFixture<DevexpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevexpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevexpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
