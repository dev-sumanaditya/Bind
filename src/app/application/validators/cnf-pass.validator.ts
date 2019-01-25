import { FormGroup } from '@angular/forms';

export function MustMatch(pass: string, cnfPass: string) {
    return (fb: FormGroup) => {
        const password = fb.controls[pass];
        const confirmPass = fb.controls[cnfPass];

        if (confirmPass.errors && !confirmPass.errors.mustMatch) {
            return;
        }
        if (password.value !== confirmPass.value) {
            confirmPass.setErrors({ mustMatch: true });
        } else {
            confirmPass.setErrors(null);
        }
    };
}
