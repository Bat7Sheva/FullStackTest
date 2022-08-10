import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { idValidator } from '../shared/validator-id.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  typingTimer: any;
  doneTypingInterval = 300000;
  redirectUrl: string = "";
  public loginInvalid = false;
  hide: boolean = true;
  validDetails: boolean | void = false;
  myControl = new FormControl('', [Validators.required, Validators.minLength(9), idValidator])

  constructor(
    private router: Router,
    private _AppService: AppService,
    public dialogRef: MatDialogRef<LoginPageComponent>,public dialog: MatDialog
    , private _snackBar: MatSnackBar) {
  }

  onsubmit(): void {
    this.loginInvalid = false;
    if (this.myControl.valid) {
      this.validDetails = this.getAccess(this.myControl.value);
      if (!this.validDetails)
        this.loginInvalid = true;
    }
  }

  getAccess(ID: string): boolean | void {
    this._AppService.getAccess(ID).subscribe(x => {
      if (x.idNumber) {
        this.dialogRef.close(x);
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
          let dialogRef = this.dialog.open(LoginPageComponent);
        },
          this.doneTypingInterval);
        return true;
      }
      else {
        this._snackBar.open("משתמש לא קיים", "אישור", {
          duration: 1000,
        })
        return false;
      }
    });
  }
}