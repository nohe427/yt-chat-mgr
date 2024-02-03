import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagePopupComponent } from './chat-message-popup.component';

describe('ChatMessagePopupComponent', () => {
  let component: ChatMessagePopupComponent;
  let fixture: ComponentFixture<ChatMessagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessagePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatMessagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
