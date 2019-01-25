import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  private image = true;
  private video = true;
  private msg_id = 'hexa-123';
  private replies = [
    {'author': 'Lisa', 'message': 'lorem ipsem something something is lorem ipsem something something is lorem i this.', 'time': '1h'},
    {'author': 'Mike tyson', 'message': 'lorem ipsem something is.', 'time': '1h'},
    {'author': 'Lisa', 'message': 'get me some omething is this.', 'time': 'now'},
  ];

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
  }
}
