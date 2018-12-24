import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { RegisteredUsersService } from 'src/app/admin/services/registered-users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  private columnDefs: any;
  private rowData: any;
  private showActionBtn = false;
  private takeAction: any;
  private selectedOption: string;


  showAction() {
    if (this.showActionBtn) {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map( node => node.data );
      this.takeAction = selectedData[0];
      this.showActionBtn = false;
    }
  }

  closeAction() {
    this.takeAction = '';
    this.selectedOption = '';
  }

  submitAction() {
    const data: any = {
      'id' : this.takeAction.id,
      'action': this.selectedOption
    };
    console.log(data);
  }

  onSelectionChanged(event) {
    const rowCount = event.api.getSelectedNodes().length;
    if (rowCount > 0) {
      this.showActionBtn = true;
    } else {
      this.showActionBtn = false;
      this.takeAction = '';
    }
  }

  constructor(private userService: RegisteredUsersService) { }

  ngOnInit() {
    this.columnDefs = this.userService.getDummyHeader();
    this.rowData = this.userService.getDummyUsers();
  }

}
