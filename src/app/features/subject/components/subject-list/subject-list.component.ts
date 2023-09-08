import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs';
import { Subject } from 'src/app/core/models/subject';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss','../../../../shared/styles/common-styles.scss']
})
export class SubjectListComponent implements OnInit {
  dataSource: MatTableDataSource<Subject> = new MatTableDataSource<Subject>([]);

  subjects!: Subject[];

  totalSubjects: number = 0;

  constructor(
    private subjectService: SubjectService,
  ) { }

  ngOnInit(): void {
    this.loadSubjects();
  }

  private loadSubjects() {
    this.subjectService.getSubjects().subscribe(subjects => {
      this.dataSource = new MatTableDataSource(subjects);
      this.totalSubjects = subjects.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteSubject(id: number) {
    this.subjectService.deleteSubject(id)
      .pipe(
        switchMap(() => this.subjectService.getSubjects()),
        tap(subjects => {
          this.subjects = subjects;
          this.dataSource.data = subjects;
          this.dataSource._updateChangeSubscription();
          this.totalSubjects = subjects.length;
        })
      )
      .subscribe();
  }

}
