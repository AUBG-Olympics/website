import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheTeamPageComponent } from './meet-the-team-page.component';

describe('MeetTheTeamPageComponent', () => {
  let component: MeetTheTeamPageComponent;
  let fixture: ComponentFixture<MeetTheTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTheTeamPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetTheTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
