import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWePageComponent } from './who-are-we-page.component';

describe('WhoAreWePageComponent', () => {
  let component: WhoAreWePageComponent;
  let fixture: ComponentFixture<WhoAreWePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoAreWePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoAreWePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
