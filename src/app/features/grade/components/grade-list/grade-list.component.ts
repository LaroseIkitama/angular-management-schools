import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs';
import { Grade } from 'src/app/core/models/grade';
import { GradeService } from 'src/app/core/services/grade.service';


@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss','../../../../shared/styles/common-styles.scss']
})
export class GradeListComponent implements OnInit {
  dataSource: MatTableDataSource<Grade> = new MatTableDataSource<Grade>([]);

  grades!: Grade[];

  totalGrades: number = 0;

  constructor(
    private gradeService: GradeService,
  ) { }

  ngOnInit(): void {
    this.loadGrades();
  }

  private loadGrades() {
    this.gradeService.getGrades().subscribe(grades => {
      this.dataSource = new MatTableDataSource(grades);
      this.totalGrades = grades.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteGrade(id: number) {
    this.gradeService.deleteGrade(id)
      .pipe(
        switchMap(() => this.gradeService.getGrades()),
        tap(grades => {
          this.grades = grades;
          this.dataSource.data = grades;
          this.dataSource._updateChangeSubscription();
        })
      )
      .subscribe();
  }

}
