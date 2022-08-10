import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})

export class EditAddressComponent implements OnInit {

  editAddressForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
  })

  constructor(private _AppService: AppService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditAddressComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.editAddressForm.setValue(this.data.address);
  }

  saveUpdate() {
    this.data.address=this.editAddressForm.value;
    this._AppService.updateAddress(this.data).subscribe(x => {
      if (x)
        this.dialogRef.close();
      else
        this._snackBar.open("ארעה שגיאה, הכתובת לא השתנתה", "אישור");
    })
  }
}
