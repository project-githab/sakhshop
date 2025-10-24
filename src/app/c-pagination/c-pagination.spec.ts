import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPagination } from './c-pagination';

describe('CPagination', () => {
  let component: CPagination;
  let fixture: ComponentFixture<CPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
