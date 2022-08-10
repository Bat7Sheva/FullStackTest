import { Component, Input, OnInit } from '@angular/core';
import { ContractList } from '../shared/Myinterface';

@Component({
  selector: 'app-packages-by-contract',
  templateUrl: './packages-by-contract.component.html',
  styleUrls: ['./packages-by-contract.component.scss']
})
export class PackagesByContractComponent implements OnInit {

  @Input() packagesByContract!: ContractList;

  constructor() { }

  ngOnInit(): void {
  }
}