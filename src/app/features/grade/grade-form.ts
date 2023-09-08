import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createGradeForm(fb: FormBuilder): FormGroup {
    return fb.group({
        id:[],
        score: ['', Validators.required],
        comment: [''],
        type: ['', Validators.required],
        student: [, Validators.required],
        subject: [, Validators.required]
    });
}
