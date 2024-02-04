import { Injectable, signal } from '@angular/core';
import { asyncScheduler } from 'rxjs';
import { authState, getAuth, Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChatsService {

  constructor(private auth: Auth) {
    
   }

  messages = signal([]);


  // observe(delay: number) {
  //   return asyncScheduler.schedule(function (state) {
  //     console.log(state);
  //   }, 0); // 0 indicates the delay in milliseconds
  // }
}
