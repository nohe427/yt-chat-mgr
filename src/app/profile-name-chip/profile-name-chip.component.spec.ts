import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNameChipComponent } from './profile-name-chip.component';

describe('ProfileNameChipComponent', () => {
  let component: ProfileNameChipComponent;
  let fixture: ComponentFixture<ProfileNameChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileNameChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileNameChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
