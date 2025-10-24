import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSideBar } from './c-side-bar';

describe('CSideBar', () => {
  let component: CSideBar;
  let fixture: ComponentFixture<CSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
