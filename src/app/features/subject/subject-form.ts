import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createSubjectForm(fb: FormBuilder): FormGroup {
    return fb.group({
        id: [],
        name: ['', Validators.required],
        coefficient: ['', Validators.required]
    });
}
