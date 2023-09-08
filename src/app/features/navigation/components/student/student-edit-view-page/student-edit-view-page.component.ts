import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit-view-page',
  templateUrl: './student-edit-view-page.component.html',
  styleUrls: ['./student-edit-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class StudentEditViewPageComponent implements OnInit{
  STUDENT_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.STUDENT_ID = this.activatedRoute.snapshot.params['ID'];
  }
}
