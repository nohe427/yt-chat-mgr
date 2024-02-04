import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-all-chats',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './all-chats.component.html',
  styleUrl: './all-chats.component.css'
})
export class AllChatsComponent {

}
