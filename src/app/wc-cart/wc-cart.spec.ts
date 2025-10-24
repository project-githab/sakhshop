import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcCart } from './wc-cart';

describe('WcCart', () => {
  let component: WcCart;
  let fixture: ComponentFixture<WcCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WcCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
