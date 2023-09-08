import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classroom-students-list-view-page',
  templateUrl: './classroom-students-list-view-page.component.html',
  styleUrls: ['./classroom-students-list-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class ClassroomStudentsListViewPageComponent implements OnInit{
  CLASSROOM_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.CLASSROOM_ID = this.activatedRoute.snapshot.params['classroomId'];
  }
}
