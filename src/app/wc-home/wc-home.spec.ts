import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcHome } from './wc-home';

describe('WcHome', () => {
  let component: WcHome;
  let fixture: ComponentFixture<WcHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WcHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
