import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class SubjectCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    @Inject('SubjectForm') private sharedForm: FormGroup
  ) {
    this.form = this.sharedForm;
  }

  ngOnInit(): void {}

  get name() {
    return this.form.get('name');
  }

  get coefficient() {
    return this.form.get('coefficient');
  }

  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.hasError('required');
  }

  onSubmit() {
    console.table(this.form.value);

    if (this.form.valid) {
      this.subjectService.createSubject(this.form.value).pipe(
        tap(() => this.router.navigateByUrl('/navigation/subjects/list'))
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
