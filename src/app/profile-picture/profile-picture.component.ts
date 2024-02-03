import { Component } from '@angular/core';

@Component({
  selector: 'profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {
  profilePicture = 'https://yt3.ggpht.com/SkD74USBSA0FY_UQnVGscLdeOw3KIzeOi5lATlJbaeF9efLpz1PXtzJt2k54NVMBFiQHtviPQg=s88-c-k-c0x00ffffff-no-rj';
  profilePictureAlt = 'Profile Picture';
}
