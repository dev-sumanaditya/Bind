import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {

  @Output() reply = new EventEmitter();

  private data: string;
  private file = true;
  private image = false;
  private video = false;
  private msg_id = 'hexa-123';
  private isReplies = false;
  private replies = [
    
  ];
  private you = false;

  constructor(private _modal: ModalService) { }

  ngOnInit() {
    this.data = 'https://www.lollypop.design/media/5385/10_color-psychology.jpg';
  }

  openModal() {
    this._modal.openModal(this.data);
  }

  replyfn() {
    this.reply.emit(this.msg_id);
    this.replies.push({'author': 'You', 'message': 'this is good.', 'time': '1h'});
    this.isReplies = true;
  }
}
