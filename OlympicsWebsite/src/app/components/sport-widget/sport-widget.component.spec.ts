import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportWidgetComponent } from './sport-widget.component';

describe('SportWidgetComponent', () => {
  let component: SportWidgetComponent;
  let fixture: ComponentFixture<SportWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
