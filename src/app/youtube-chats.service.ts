import { Injectable, signal } from '@angular/core';
import { asyncScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeChatsService {

  constructor() { }

  messages = signal([]);

  

  // observe(delay: number) {
  //   return asyncScheduler.schedule(function (state) {
  //     console.log(state);
  //   }, 0); // 0 indicates the delay in milliseconds
  // }
}
