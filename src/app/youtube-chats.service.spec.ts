import { TestBed } from '@angular/core/testing';

import { YoutubeChatsService } from './youtube-chats.service';

describe('YoutubeChatsService', () => {
  let service: YoutubeChatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeChatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
