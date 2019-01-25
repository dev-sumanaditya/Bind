import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-web-app-panel',
  templateUrl: './web-app-panel.component.html',
  styleUrls: ['./web-app-panel.component.css']
})
export class WebAppPanelComponent implements OnInit, OnDestroy {

  private notifications: any = {
    'message': false,
    'search': true,
    'home': false,
    'notification': false,
    'profile': true,
    'settings': true
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {}

}
