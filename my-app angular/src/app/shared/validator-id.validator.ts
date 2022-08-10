import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const idValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let identity = control.value
  if (!isIsraeliIdValid(identity)) {
    return { identityRevealed: true }
  }
  else {
    return null
  }
};

function isIsraeliIdValid(id: string): boolean {
  let strId = String(id).trim();
  if (strId.length > 9) {
    return false;
  }
  if (strId.length < 9) {
    while (strId.length < 9) strId = "0" + strId;
  }
  let counter = 0, rawVal, actualVal;
  for (let i = 0; i < strId.length; i++) {
    rawVal = Number(strId[i]) * ((i % 2) + 1);
    actualVal = rawVal > 9 ? (rawVal - 9) : rawVal;
    counter += actualVal;
  }
  return (counter % 10 === 0);
};