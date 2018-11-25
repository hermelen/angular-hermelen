import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherskillsComponent } from './otherskills.component';

describe('OtherskillsComponent', () => {
  let component: OtherskillsComponent;
  let fixture: ComponentFixture<OtherskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
