import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMatchesComponent } from './next-matches.component';

describe('NextMatchesComponent', () => {
  let component: NextMatchesComponent;
  let fixture: ComponentFixture<NextMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
