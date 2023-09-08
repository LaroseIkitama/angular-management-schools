import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classroom-subjects-list-view-page',
  templateUrl: './classroom-subjects-list-view-page.component.html',
  styleUrls: ['./classroom-subjects-list-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class ClassroomSubjectsListViewPageComponent implements OnInit {
  CLASSROOM_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.CLASSROOM_ID = this.activatedRoute.snapshot.params['classroomId'];
  }
}
