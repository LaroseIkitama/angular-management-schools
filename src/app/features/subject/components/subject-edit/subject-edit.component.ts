import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Subject } from 'src/app/core/models/subject';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class SubjectEditComponent implements OnInit {
  @Input()
  SUBJECT_ID!: number;

  subject!: Subject;
  form!: FormGroup;

  constructor(
    private router: Router,
    private subjectService: SubjectService,
    @Inject('SubjectForm') private sharedForm: FormGroup
  ) {
    this.form = this.sharedForm;
  }

  ngOnInit(): void {
    this.loadSubject(this.SUBJECT_ID);
  }

  private loadSubject(subjectId: number) {
    this.subjectService.getSubject(subjectId).subscribe(subject => {
      this.subject = subject;
      this.loadForm(this.subject);
    });
  }

  private loadForm(subject: Subject) {
    this.form.setValue({
      id: subject.id,
      name: subject.name,
      coefficient: subject.coefficient
    });
  }

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
      this.subjectService.updateSubject(this.form.value).pipe(
        tap(() => this.router.navigateByUrl('/navigation/subjects/list'))
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }


  goBack() {
    this.router.navigate(['/navigation/subjects/list']);
  }
}
