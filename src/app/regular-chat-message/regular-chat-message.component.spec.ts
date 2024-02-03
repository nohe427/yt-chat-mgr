import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularChatMessageComponent } from './regular-chat-message.component';

describe('RegularChatMessageComponent', () => {
  let component: RegularChatMessageComponent;
  let fixture: ComponentFixture<RegularChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularChatMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
