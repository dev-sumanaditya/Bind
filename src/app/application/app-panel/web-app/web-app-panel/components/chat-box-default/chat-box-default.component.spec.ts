import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxDefaultComponent } from './chat-box-default.component';

describe('ChatBoxDefaultComponent', () => {
  let component: ChatBoxDefaultComponent;
  let fixture: ComponentFixture<ChatBoxDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
