import { FormControl, Validators } from '@angular/forms';

export const NewProfileFormFields = {
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]),
  description: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(255)
  ]),
  machines: new FormControl([])
};
