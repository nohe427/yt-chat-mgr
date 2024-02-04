import { Component } from '@angular/core';
import { ProfileLogoComponent } from '../profile-logo/profile-logo.component';
import { RegularChatMessageComponent } from '../regular-chat-message/regular-chat-message.component';

@Component({
  selector: 'chat-message-popup',
  standalone: true,
  imports: [
    ProfileLogoComponent,
    RegularChatMessageComponent,
  ],
  templateUrl: './chat-message-popup.component.html',
  styleUrl: './chat-message-popup.component.css'
})
export class ChatMessagePopupComponent {
}
