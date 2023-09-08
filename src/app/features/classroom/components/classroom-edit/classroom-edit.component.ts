import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classroom } from 'src/app/core/models/classroom';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styleUrls: ['./classroom-edit.component.scss','../../../../shared/styles/common-styles.scss']
})
export class ClassroomEditComponent implements OnInit {
  @Input() CLASSROOM_ID!: number;
  levelOptions: string[] = ['License 1', 'License 2', 'License 3', 'Master 1', 'Master 2', 'Master 3'];
  yearOptions: number[] = this.generateYearOptions(1990, 2050);

  currentClassroom: Classroom = new Classroom();
  selectedYear!: number;

  classroom!: Classroom;


  constructor(
    private router: Router,
    private classroomService: ClassroomService
  ) { }

  ngOnInit(): void {
    this.initializeYearOptions();
    this.fetchClassroom();
  }

  private initializeYearOptions() {
    this.yearOptions = this.generateYearOptions(1990, 2050);
  }

  private fetchClassroom() {
    this.classroomService.getClassroom(this.CLASSROOM_ID).subscribe(classroom => {
      this.currentClassroom = classroom;
      this.selectedYear = classroom.year;
    });
  }

  generateYearOptions(startYear: number, endYear: number): number[] {
    const years: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  onChangeYear(year: number) {
    this.currentClassroom.year = year;
  }

  submitForm() {
    this.classroomService.updateClassroom(this.currentClassroom).subscribe();
    this.router.navigateByUrl('/navigation/classrooms/list');
  }

  goBack() {
    this.router.navigate(['/navigation/classrooms/list']);
  }
}
