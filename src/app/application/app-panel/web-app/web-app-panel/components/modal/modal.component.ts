import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  private Data: string;
  subscription: Subscription;

  constructor(private _modal: ModalService) { }

  ngOnInit() {
    console.log('subscribed to modal service');
    this.subscription = this._modal.getData()
      .subscribe(data => {
        this.Data = data;
      });
  }

  ngOnDestroy() {   // not called
    console.log('unsubscribed to modal service');
    this.subscription.unsubscribe();
  }

  log() {
    console.log('do Nothing');
  }
  close(data) {
    if (data.target.className === 'modal-container') {
      this.Data = '';
    }
  }
}
