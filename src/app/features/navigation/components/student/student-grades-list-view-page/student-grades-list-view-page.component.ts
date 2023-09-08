import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-grades-list-view-page',
  templateUrl: './student-grades-list-view-page.component.html',
  styleUrls: ['./student-grades-list-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class StudentGradesListViewPageComponent implements OnInit {
  STUDENT_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.STUDENT_ID = this.activatedRoute.snapshot.params['studentId'];
  }

}
