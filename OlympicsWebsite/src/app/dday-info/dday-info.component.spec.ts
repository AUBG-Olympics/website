import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdayInfoComponent } from './dday-info.component';

describe('DdayInfoComponent', () => {
  let component: DdayInfoComponent;
  let fixture: ComponentFixture<DdayInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdayInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
