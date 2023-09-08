import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'src/app/core/models/subject';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-classroom-subjects-list',
  templateUrl: './classroom-subjects-list.component.html',
  styleUrls: ['./classroom-subjects-list.component.scss','../../../../shared/styles/common-styles.scss']
})
export class ClassroomSubjectsListComponent implements OnInit {
  @Input() CLASSROOM_ID!: number;
  dataSource: MatTableDataSource<Subject> = new MatTableDataSource<Subject>([]);

  subjects!: Subject[];

  totalSubjects: number = 0;

  constructor(
    private classroomService: ClassroomService,
  ) { }

  ngOnInit(): void {
    this.loadSubjectsForClass(this.CLASSROOM_ID);
  }

  private loadSubjectsForClass(classroomId: number) {
    this.classroomService.getSubjectsInClassroom(classroomId).subscribe(
      subjects => {
        this.dataSource = new MatTableDataSource(subjects);
        this.totalSubjects = subjects.length;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
