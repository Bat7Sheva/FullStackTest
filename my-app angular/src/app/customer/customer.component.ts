import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContractList, CustomersList } from '../shared/Myinterface';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressComponent } from './edit-address/edit-address.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  ContractChoose!: ContractList;
  @Input() customerData!: CustomersList;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editAddress() {
    const dialogRef = this.dialog.open(EditAddressComponent, {
      width: '250px',
      data: this.customerData,
    })
  }
}
