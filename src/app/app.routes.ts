import { Routes } from '@angular/router';
import { ChatMessagePopupComponent } from './chat-message-popup/chat-message-popup.component';
import { AllChatsComponent } from './all-chats/all-chats.component';

export const routes: Routes = [
    {
        path: '',
        component: AllChatsComponent,
    },
    {
        path: 'chats',
        component: ChatMessagePopupComponent,
    },
    // {
    // matcher: (url) => {
    //     return url.length === 1 && url[0].path === '';
    // },
    // component: ChatMessagePopupComponent
    // },
];
