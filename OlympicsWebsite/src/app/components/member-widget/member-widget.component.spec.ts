import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberWidgetComponent } from './member-widget.component';

describe('MemberWidgetComponent', () => {
  let component: MemberWidgetComponent;
  let fixture: ComponentFixture<MemberWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
