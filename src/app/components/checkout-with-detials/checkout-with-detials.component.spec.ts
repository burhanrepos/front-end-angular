import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutWithDetialsComponent } from './checkout-with-detials.component';

describe('CheckoutWithDetialsComponent', () => {
  let component: CheckoutWithDetialsComponent;
  let fixture: ComponentFixture<CheckoutWithDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutWithDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutWithDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
