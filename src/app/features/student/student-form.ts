import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createStudentForm(fb: FormBuilder): FormGroup {
    return fb.group({
        id: [],
        registrationNumber: [],
        full_name: ['', Validators.required],
        date_of_birth: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone_number: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
        gender: ['', [Validators.required]],
        classroom: [, Validators.required]
    });
}
