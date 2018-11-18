import { FormControl, Validators } from '@angular/forms';

export const EditProfileFormFields = {
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]),
  description: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(255)
  ])
};
