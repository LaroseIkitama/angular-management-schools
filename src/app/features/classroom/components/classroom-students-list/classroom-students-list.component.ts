import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/core/models/student';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-classroom-students-list',
  templateUrl: './classroom-students-list.component.html',
  styleUrls: ['./classroom-students-list.component.scss','../../../../shared/styles/common-styles.scss']
})
export class ClassroomStudentsListComponent implements OnInit {
  @Input() CLASSROOM_ID!: number;
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>([]);

  students!: Student[];

  totalStudents: number = 0;

  constructor(
    private classroomService: ClassroomService,
  ) { }

  ngOnInit(): void {
    this.loadStudentsForClass(this.CLASSROOM_ID);
  }

  private loadStudentsForClass(classroomId: number) {
    this.classroomService.getStudentsInClassroom(classroomId).subscribe(
      students => {
        this.dataSource = new MatTableDataSource(students);
        this.totalStudents = students.length;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
