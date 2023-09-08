import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grade-edit-view-page',
  templateUrl: './grade-edit-view-page.component.html',
  styleUrls: ['./grade-edit-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class GradeEditViewPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GRADE_ID = this.activatedRoute.snapshot.params['ID'];
  }

  GRADE_ID!: number;

}
