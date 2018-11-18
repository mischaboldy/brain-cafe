import { FormControl, Validators } from '@angular/forms';

export const EditMachineFormFields = {
  name: new FormControl('', [
    Validators.required,
  ]),
  url: new FormControl('', [
    Validators.required,
  ]),
  port: new FormControl('', [
    Validators.required,
  ]),
  path: new FormControl('', [
    Validators.required,
  ]),
  username: new FormControl('', [
    Validators.required,
  ]),
  password: new FormControl('', [
    Validators.required,
  ]),
};
