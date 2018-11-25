import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherexpsComponent } from './otherexps.component';

describe('OtherexpsComponent', () => {
  let component: OtherexpsComponent;
  let fixture: ComponentFixture<OtherexpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherexpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherexpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
