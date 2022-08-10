import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from './login/login-page.component';
import { CustomersList } from './shared/Myinterface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  customerData: CustomersList | undefined;
  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.openLogin();
  }

  openLogin() {
    let dialogRef = this.dialog.open(LoginPageComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.customerData = result;
    });
  }
}