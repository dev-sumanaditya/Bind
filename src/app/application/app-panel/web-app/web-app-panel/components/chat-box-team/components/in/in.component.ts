import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy} from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InComponent implements OnInit {

  @Output() reply = new EventEmitter();

  @Input() indata: any;

  private data: string;
  private file = true;
  private image = true;
  private video = true;
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
    this.replies.push({'author': 'You', 'message': 'this is good. the presentation was awesome and everyone liked it', 'time': '1h'});
    this.isReplies = true;
  }
}
