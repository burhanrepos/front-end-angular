import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageWithBannerComponent } from './landing-page-with-banner.component';

describe('LandingPageWithBannerComponent', () => {
  let component: LandingPageWithBannerComponent;
  let fixture: ComponentFixture<LandingPageWithBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageWithBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageWithBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
