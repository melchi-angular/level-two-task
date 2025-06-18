import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsettledBetsComponent } from './unsettled-bets.component';

describe('UnsettledBetsComponent', () => {
  let component: UnsettledBetsComponent;
  let fixture: ComponentFixture<UnsettledBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsettledBetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsettledBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
