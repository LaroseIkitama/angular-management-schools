import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-show-view-page',
  templateUrl: './student-show-view-page.component.html',
  styleUrls: ['./student-show-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class StudentShowViewPageComponent implements OnInit {
  STUDENT_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.STUDENT_ID = this.activatedRoute.snapshot.params['ID'];
  }
}
