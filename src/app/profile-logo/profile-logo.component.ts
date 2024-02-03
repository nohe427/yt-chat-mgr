import { Component } from '@angular/core';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { ProfileNameChipComponent } from '../profile-name-chip/profile-name-chip.component';

@Component({
  selector: 'profile-logo',
  standalone: true,
  imports: [
    ProfilePictureComponent,
    ProfileNameChipComponent,
  ],
  templateUrl: './profile-logo.component.html',
  styleUrl: './profile-logo.component.css'
})
export class ProfileLogoComponent {

}
