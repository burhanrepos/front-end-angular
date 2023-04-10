import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowThingsWillWorkComponent } from './how-things-will-work.component';

describe('HowThingsWillWorkComponent', () => {
  let component: HowThingsWillWorkComponent;
  let fixture: ComponentFixture<HowThingsWillWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowThingsWillWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowThingsWillWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
