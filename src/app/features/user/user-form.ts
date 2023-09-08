import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createUserForm(fb: FormBuilder): FormGroup {
    return fb.group({
        id:[],
        name: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required]
    });
}
