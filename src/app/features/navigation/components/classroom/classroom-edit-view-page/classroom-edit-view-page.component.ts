import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classroom-edit-view-page',
  templateUrl: './classroom-edit-view-page.component.html',
  styleUrls: ['./classroom-edit-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class ClassroomEditViewPageComponent implements OnInit{
  CLASSROOM_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.CLASSROOM_ID = this.activatedRoute.snapshot.params['ID'];
  }
}
