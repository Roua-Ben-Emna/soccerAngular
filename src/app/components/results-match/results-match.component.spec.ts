import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMatchComponent } from './results-match.component';

describe('ResultsMatchComponent', () => {
  let component: ResultsMatchComponent;
  let fixture: ComponentFixture<ResultsMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
