import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs';
import { Classroom } from 'src/app/core/models/classroom';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss','../../../../shared/styles/common-styles.scss']
})
export class ClassroomListComponent implements OnInit {
  dataSource: MatTableDataSource<Classroom> = new MatTableDataSource<Classroom>([]);

  classrooms!: Classroom[];

  totalClasses: number = 0;


  constructor(
    private classroomService: ClassroomService,
  ) { }

  ngOnInit(): void {
    this.loadClassrooms();
  }

  private loadClassrooms() {
    this.classroomService.getClassrooms().subscribe(classrooms => {
      this.dataSource = new MatTableDataSource(classrooms);
      this.totalClasses = classrooms.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteClassroom(id: number) {
    this.classroomService.deleteClassroom(id)
      .pipe(
        switchMap(
          () => this.classroomService.getClassrooms()
        ),
        tap(
          classrooms => {
            this.classrooms = classrooms;
            this.dataSource.data = classrooms;
            this.dataSource._updateChangeSubscription();
            this.totalClasses = classrooms.length;
          }
        )
      )
      .subscribe();
  }
}
