import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grade-show-view-page',
  templateUrl: './grade-show-view-page.component.html',
  styleUrls: ['./grade-show-view-page.component.scss','../../../../../shared/styles/common-styles.scss']
})
export class GradeShowViewPageComponent implements OnInit{
  GRADE_ID!: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GRADE_ID = this.activatedRoute.snapshot.params['ID'];
  }



}
