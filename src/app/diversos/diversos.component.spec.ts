import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversosComponent } from './diversos.component';

describe('DiversosComponent', () => {
  let component: DiversosComponent;
  let fixture: ComponentFixture<DiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
