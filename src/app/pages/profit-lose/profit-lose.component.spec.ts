import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLOseComponent } from './profit-lose.component';

describe('ProfitLOseComponent', () => {
  let component: ProfitLOseComponent;
  let fixture: ComponentFixture<ProfitLOseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitLOseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitLOseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
