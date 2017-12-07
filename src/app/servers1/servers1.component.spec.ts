import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servers1Component } from './servers1.component';

describe('Servers1Component', () => {
  let component: Servers1Component;
  let fixture: ComponentFixture<Servers1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servers1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
