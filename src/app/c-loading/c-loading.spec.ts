import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoading } from './c-loading';

describe('CLoading', () => {
  let component: CLoading;
  let fixture: ComponentFixture<CLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLoading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLoading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
