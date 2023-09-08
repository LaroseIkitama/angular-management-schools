import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createClassroomForm(fb: FormBuilder): FormGroup {
    return fb.group({
        id: [],
        name: ['', [Validators.required, Validators.pattern('^(?!\'|\\s)[a-zA-ZÀ-ÿ \']+$')]],
        level: ['', [Validators.required]],
        year: ['', [Validators.required]],
        maximum_capacity: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
    });
}
