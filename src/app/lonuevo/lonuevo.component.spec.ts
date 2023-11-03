import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonuevoComponent } from './lonuevo.component';

describe('LonuevoComponent', () => {
  let component: LonuevoComponent;
  let fixture: ComponentFixture<LonuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LonuevoComponent]
    });
    fixture = TestBed.createComponent(LonuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
