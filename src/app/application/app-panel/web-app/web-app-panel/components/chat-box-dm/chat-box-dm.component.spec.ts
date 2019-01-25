import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxDmComponent } from './chat-box-dm.component';

describe('ChatBoxDmComponent', () => {
  let component: ChatBoxDmComponent;
  let fixture: ComponentFixture<ChatBoxDmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxDmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
