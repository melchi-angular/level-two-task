import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMarketComponent } from './multi-market.component';

describe('MultiMarketComponent', () => {
  let component: MultiMarketComponent;
  let fixture: ComponentFixture<MultiMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
