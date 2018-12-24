import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  // header menu items
  private items = [{ title: 'Profile' }, { title: 'Log out' }];

  private menuItems = [
    {
      title: 'Dashboard',
      link: '/admin',
      icon: 'nb-grid-a-outline',
      pathMatch: 'full'
    },
    {
      title: 'Analytics',
      link: '/admin/analytics' ,
      icon: 'nb-bar-chart',
      pathMatch: 'full'
    },
    {
      title: 'Users',
      link: '/admin/users',
      icon: 'nb-person',
      pathMatch: 'full'
    },
    {
      title: 'Members',
      link: '/admin/members',
      icon: 'nb-danger',
      pathMatch: 'full'
    },
    {
      title: 'Actions',
      link: '/admin/actions',
      icon: 'nb-checkmark-circle',
      pathMatch: 'full'
    },
    {
      title: 'Settings',
      link: '/admin/settings',
      icon: 'nb-gear',
      pathMatch: 'full'
    },
  ];

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  // Toggle sidebar
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
